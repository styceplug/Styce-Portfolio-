import { useEffect } from 'react'

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

const JSON_LD_ID = 'route-structured-data'

/** Keeps the document head in sync with the active page during client routing. */
export function useDocumentMeta(meta) {
  useEffect(() => {
    document.title = meta.title

    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[name="robots"]', 'content', meta.robots)
    setMeta('link[rel="canonical"]', 'href', meta.canonical)
    setMeta('meta[property="og:url"]', 'content', meta.canonical)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:image"]', 'content', meta.image)
    setMeta('meta[property="og:image:secure_url"]', 'content', meta.image)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:image"]', 'content', meta.image)

    document.head.querySelector(`#${JSON_LD_ID}`)?.remove()

    if (meta.jsonLd.length > 0) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = JSON_LD_ID
      script.textContent = JSON.stringify(meta.jsonLd.length === 1 ? meta.jsonLd[0] : meta.jsonLd)
      document.head.append(script)
    }
  }, [meta])
}
