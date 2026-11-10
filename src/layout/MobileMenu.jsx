import { useEffect } from 'react'
import { Link } from '../router/Router.jsx'
import { navItems } from '../data/site.js'

export default function MobileMenu({ open, activePath, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="menu-overlay">
      <button className="menu-close" type="button" aria-label="Close navigation" onClick={onClose}>
        x
      </button>
      <nav aria-label="Expanded navigation">
        {navItems.map(({ label, to }) => {
          const isActive = to === '/' ? activePath === '/' : activePath.startsWith(to)
          return (
            <Link
              to={to}
              key={to}
              className={isActive ? 'active' : undefined}
              aria-current={isActive ? 'page' : undefined}
              onClick={onClose}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
