import { socialLinks } from '../data/site.js'

export default function SocialRail({ className = '' }) {
  return (
    <aside className={`social-rail ${className}`.trim()} aria-label="Social profiles">
      {socialLinks.map(({ label, icon, href }) => (
        <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
          <img src={icon} alt="" />
        </a>
      ))}
    </aside>
  )
}
