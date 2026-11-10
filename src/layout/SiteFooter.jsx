import { Link } from '../router/Router.jsx'
import { navItems, owner, resumeUrl, socialLinks } from '../data/site.js'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link to="/" className="wordmark">
            {owner.name}
          </Link>
          <p>{owner.role} building mobile products, web platforms, and design systems from Nigeria.</p>
          <a className="site-footer-resume" href={resumeUrl} download>
            Download resume
          </a>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          <h2>Pages</h2>
          {navItems.map(({ label, to }) => (
            <Link to={to} key={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-footer-social">
          <h2>Elsewhere</h2>
          <div>
            {socialLinks.map(({ label, href }) => (
              <a href={href} key={label} target="_blank" rel="noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer-base">
        <small>
          © {new Date().getFullYear()} {owner.name}. All rights reserved.
        </small>
        <a href={`mailto:${owner.email}`}>{owner.email}</a>
      </div>
    </footer>
  )
}
