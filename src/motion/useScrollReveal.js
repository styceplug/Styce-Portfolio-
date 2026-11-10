import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** Card-like items fade up one by one; sections without cards fade up as a block. */
const ITEM_SELECTOR = [
  '.landing-project-card',
  '.journal-card',
  '.blog-list-card',
  '.contact-channel',
  '.work-section-header',
].join(',')

const SECTION_SELECTOR =
  'main > section:not(:first-child):not(.page-hero):not(.detail-hero)' +
  ':not(:has(.landing-project-card, .journal-card, .blog-list-card, .contact-channel))'

const READY_CLASS = 'reveal-ready'

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/**
 * Marks sections and cards below the fold and fades them in as they scroll
 * into view. Content is prerendered visible; the hidden state only applies
 * once `html.reveal-ready` is set, after anything already on screen has been
 * marked as revealed, so the first paint never flashes.
 */
export function useScrollReveal(routeKey) {
  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement
    const main = document.getElementById('main')
    if (!main || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined

    const isFirstRun = !root.classList.contains(READY_CLASS)
    const targets = [
      ...main.querySelectorAll(`${SECTION_SELECTOR}, ${ITEM_SELECTOR}`),
    ].filter((element) => !element.hasAttribute('data-reveal'))

    const reveal = (element) => element.setAttribute('data-revealed', '')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    const enteringNow = []

    targets.forEach((element) => {
      // Stagger siblings in a grid: 0, 1, 2, 0, 1, 2…
      const index = [...element.parentElement.children].indexOf(element)
      element.setAttribute('data-reveal', '')
      if (element.matches(ITEM_SELECTOR)) element.setAttribute('data-reveal-step', String(index % 3))

      // On first load trust the real scroll position (it may be restored); after
      // a navigation the page is about to scroll to the top, so measure from there.
      const { top } = element.getBoundingClientRect()
      const offset = isFirstRun ? top : top + window.scrollY
      const inView = offset < window.innerHeight * 0.92
      if (inView && isFirstRun) reveal(element)
      else if (inView) enteringNow.push(element)
      else observer.observe(element)
    })

    root.classList.add(READY_CLASS)

    // After a client-side navigation, let what is already on screen fade in too.
    let frame = 0
    if (enteringNow.length) {
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => enteringNow.forEach(reveal))
      })
    }

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [routeKey])
}
