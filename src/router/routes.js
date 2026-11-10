/**
 * Route table. Each entry is a page with its own URL; anything below a page
 * (a hero, a stats block, a work preview) is a section and lives behind a hash.
 */
export const routeTable = [
  { name: 'home', pattern: '/' },
  { name: 'about', pattern: '/about' },
  { name: 'work', pattern: '/work' },
  { name: 'project', pattern: '/work/:slug' },
  { name: 'blog', pattern: '/blog' },
  { name: 'post', pattern: '/blog/:slug' },
  { name: 'contact', pattern: '/contact' },
]

const segmentsOf = (path) => path.split('/').filter(Boolean)

export const normalizePath = (path) => {
  if (!path || path === '/') return '/'
  const trimmed = path.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

export function matchRoute(pathname) {
  const path = normalizePath(pathname)
  const parts = segmentsOf(path)

  for (const route of routeTable) {
    const patternParts = segmentsOf(route.pattern)
    if (patternParts.length !== parts.length) continue

    const params = {}
    const matched = patternParts.every((patternPart, index) => {
      if (patternPart.startsWith(':')) {
        params[patternPart.slice(1)] = decodeURIComponent(parts[index])
        return true
      }
      return patternPart === parts[index]
    })

    if (matched) return { name: route.name, params, path }
  }

  return { name: 'not-found', params: {}, path }
}

/** Splits an href such as `/work#featured` into its path and hash parts. */
export function parseHref(href) {
  const [pathPart = '/', hashPart = ''] = String(href).split('#')
  return {
    path: normalizePath(pathPart || '/'),
    hash: hashPart ? `#${hashPart}` : '',
  }
}

export const isExternalHref = (href) => /^(https?:|mailto:|tel:)/i.test(String(href))
