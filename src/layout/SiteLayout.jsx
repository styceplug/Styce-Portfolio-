import { useState } from 'react'
import SiteHeader from './SiteHeader.jsx'
import MobileMenu from './MobileMenu.jsx'
import SocialRail from './SocialRail.jsx'
import SiteFooter from './SiteFooter.jsx'
import { useRoute } from '../router/context.js'
import { useScrollReveal } from '../motion/useScrollReveal.js'

/**
 * The shell every page renders inside: one header, one menu, one social rail,
 * one footer. Pages only supply their own sections.
 */
export default function SiteLayout({ tone = 'dark', children }) {
  const route = useRoute()
  const [menu, setMenu] = useState({ open: false, path: route.path })
  useScrollReveal(route.path)

  // A route change always closes the menu, whichever way it was triggered.
  if (menu.path !== route.path) setMenu({ open: false, path: route.path })

  const menuOpen = menu.open
  const setMenuOpen = (open) => setMenu({ open, path: route.path })

  return (
    <div className={`site-shell site-shell--${route.name}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader
        tone={tone}
        activePath={route.path}
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <MobileMenu open={menuOpen} activePath={route.path} onClose={() => setMenuOpen(false)} />
      <SocialRail className={tone === 'dark' ? 'about-social-rail' : ''} />

      <main id="main" className={`page page--${route.name}`}>
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
