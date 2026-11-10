import { getProjectLinks } from '../../data/projects.js'

export default function ProjectLinks({ project }) {
  const links = getProjectLinks(project)

  if (links.length === 0) return null

  return (
    <div className="detail-actions">
      {links.map(({ label, href }) => (
        <a href={href} key={label} target="_blank" rel="noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}
