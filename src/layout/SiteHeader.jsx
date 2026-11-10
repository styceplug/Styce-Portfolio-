import { Link } from '../router/Router.jsx'
import { navItems, owner } from '../data/site.js'

export default function SiteHeader({ tone = 'dark', activePath, menuOpen, onOpenMenu }) {
  return (
    <header className={`site-header site-header--${tone}`}>
      <Link to="/" className="wordmark" aria-label={`${owner.name} home`}>
        {owner.shortName}
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(({ label, to }) => {
          const isActive = to === '/' ? activePath === '/' : activePath.startsWith(to)
          return (
            <Link
              to={to}
              key={to}
              className={isActive ? 'active' : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          )
        })}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={menuOpen}
        onClick={onOpenMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}
