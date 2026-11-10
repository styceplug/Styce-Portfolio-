import { Link } from '../router/Router.jsx'
import { navItems } from '../data/site.js'

export default function NotFoundPage() {
  return (
    <section className="not-found-page" id="intro">
      <p className="page-kicker">404</p>
      <h1>This page has moved on.</h1>
      <p className="page-lead">
        The link you followed does not point anywhere on this site. Here is everywhere you can go
        instead.
      </p>
      <nav className="not-found-links" aria-label="Site pages">
        {navItems.map(({ label, to }) => (
          <Link to={to} key={to}>
            {label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
