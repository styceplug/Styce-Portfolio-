import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { RouterContext, useNavigate } from './context.js'
import { isExternalHref, matchRoute, normalizePath, parseHref } from './routes.js'

const isBrowser = typeof window !== 'undefined'

const prefersReducedMotion = () =>
  isBrowser && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

const scrollToHash = (hash) => {
  const element = document.getElementById(hash.slice(1))
  if (!element) {
    scrollToTop()
    return
  }
  element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
}

export function RouterProvider({ url = '/', children }) {
  const [location, setLocation] = useState(() => parseHref(url))
  const isFirstRender = useRef(true)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const handlePopState = () => {
      setLocation({ path: normalizePath(window.location.pathname), hash: window.location.hash })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Pages start at the top; sections are reached through their hash.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      if (location.hash) scrollToHash(location.hash)
      return
    }

    if (location.hash) scrollToHash(location.hash)
    else scrollToTop()
  }, [location])

  // History is written outside the state updater: updaters must stay pure, or
  // StrictMode's double invocation pushes every entry twice.
  const navigate = useCallback(
    (href, { replace = false } = {}) => {
      const next = parseHref(href)
      const isSameTarget = location.path === next.path && location.hash === next.hash
      const target = `${next.path}${next.hash}`

      if (isBrowser) {
        if (replace || isSameTarget) window.history.replaceState({}, '', target)
        else window.history.pushState({}, '', target)
      }

      // A new object even for a repeat click, so the scroll effect re-runs.
      setLocation(isSameTarget ? { ...next } : next)
    },
    [location],
  )

  const route = useMemo(() => matchRoute(location.path), [location.path])

  const value = useMemo(() => ({ location, route, navigate }), [location, route, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

/**
 * Anchor that keeps real `href` semantics (middle click, open in new tab,
 * crawlers) while routing in-app navigation through the history API.
 */
export function Link({ to, children, onClick, ...rest }) {
  const navigate = useNavigate()
  const external = isExternalHref(to)

  const handleClick = (event) => {
    onClick?.(event)
    if (external || event.defaultPrevented) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return

    event.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : null)}
      {...rest}
    >
      {children}
    </a>
  )
}
