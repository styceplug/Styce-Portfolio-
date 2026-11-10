import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const ssrDir = path.join(projectRoot, 'dist-ssr')
const templatePath = path.join(distDir, 'index.html')
const ssrEntryPath = path.join(ssrDir, 'entry-server.js')

const { render, staticPaths } = await import(pathToFileURL(ssrEntryPath).href)

const template = await readFile(templatePath, 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Unable to find empty root element in dist/index.html')
}

const escapeAttribute = (value) => String(value).replace(/"/g, '&quot;')

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`Prerender could not find head tag: ${pattern}`)
  return html.replace(pattern, replacement)
}

/** Rewrites the shared head template with this route's metadata. */
function applyMeta(html, meta) {
  const title = escapeAttribute(meta.title)
  const description = escapeAttribute(meta.description)

  let result = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)

  const attributeReplacements = [
    [/(<meta name="description" content=")[^"]*(")/, description],
    [/(<meta name="robots" content=")[^"]*(")/, meta.robots],
    [/(<link rel="canonical" href=")[^"]*(")/, meta.canonical],
    [/(<meta property="og:url" content=")[^"]*(")/, meta.canonical],
    [/(<meta property="og:title" content=")[^"]*(")/, title],
    [/(<meta property="og:description" content=")[^"]*(")/, description],
    [/(<meta property="og:image" content=")[^"]*(")/, meta.image],
    [/(<meta property="og:image:secure_url" content=")[^"]*(")/, meta.image],
    [/(<meta name="twitter:title" content=")[^"]*(")/, title],
    [/(<meta name="twitter:description" content=")[^"]*(")/, description],
    [/(<meta name="twitter:image" content=")[^"]*(")/, meta.image],
  ]

  for (const [pattern, value] of attributeReplacements) {
    result = replaceTag(result, pattern, `$1${value}$2`)
  }

  const structuredData = meta.jsonLd
    .map(
      (entry) =>
        `    <script type="application/ld+json">\n${JSON.stringify(entry, null, 2)}\n    </script>`,
    )
    .join('\n')

  return structuredData ? result.replace('</head>', `${structuredData}\n  </head>`) : result
}

async function writePage(routePath, html) {
  const target =
    routePath === '/'
      ? templatePath
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html')

  await mkdir(path.dirname(target), { recursive: true })
  await writeFile(target, html)
  return path.relative(distDir, target)
}

/**
 * React hoists resource hints (image preloads) to the front of the SSR string.
 * The client renders them into <head>, so they have to be moved there or
 * hydration sees a different first child and throws away the markup.
 */
function splitHoistedLinks(html) {
  const hoisted = html.match(/^(?:<link\b[^>]*\/?>)+/)?.[0] ?? ''
  return { hoisted, body: html.slice(hoisted.length) }
}

function renderPage(routePath) {
  const { html, meta } = render(routePath)
  const { hoisted, body } = splitHoistedLinks(html)

  return applyMeta(template, meta)
    .replace('</head>', `${hoisted}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
}

const written = []

for (const routePath of staticPaths) {
  written.push(await writePage(routePath, renderPage(routePath)))
}

// Static-host fallback for unknown URLs (nginx `try_files ... /404.html`).
await writeFile(path.join(distDir, '404.html'), renderPage('/404'))

const siteUrl = 'https://styce.ng'
const today = new Date().toISOString().slice(0, 10)
const priorityFor = (routePath) => {
  if (routePath === '/') return '1.0'
  if (routePath.split('/').length === 2) return '0.8'
  return '0.6'
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths
  .map(
    (routePath) => `  <url>
    <loc>${siteUrl}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityFor(routePath)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
await rm(ssrDir, { recursive: true, force: true })

console.log(`Prerendered ${written.length} pages:`)
for (const file of written) console.log(`  dist/${file}`)
console.log(`  dist/404.html`)
console.log(`  dist/sitemap.xml (${staticPaths.length} urls)`)
