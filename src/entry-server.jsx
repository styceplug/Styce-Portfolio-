import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { getPageMeta, staticPaths } from './seo/pageMeta.js'
import { matchRoute } from './router/routes.js'

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <App url={url} />
    </StrictMode>,
  )

  return { html, meta: getPageMeta(matchRoute(url)) }
}

export { staticPaths, getPageMeta, matchRoute }
