import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const ssrDir = path.join(projectRoot, 'dist-ssr')
const indexPath = path.join(distDir, 'index.html')
const ssrEntryPath = path.join(ssrDir, 'prerender.js')

const { render } = await import(pathToFileURL(ssrEntryPath).href)
const appHtml = render()
const html = await readFile(indexPath, 'utf8')

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Unable to find empty root element in dist/index.html')
}

const prerenderedHtml = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

await writeFile(indexPath, prerenderedHtml)
await rm(ssrDir, { recursive: true, force: true })

console.log(`Prerendered ${indexPath}`)
