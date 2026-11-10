import { Link } from '../router/Router.jsx'
import WebProjectPreview from './WebProjectPreview.jsx'

/**
 * Project teaser. It links to the project page by URL, so it works as a real
 * link everywhere it appears (home preview, work index, related work).
 */
export default function ProjectCard({ project, compact = false }) {
  return (
    <article
      className="landing-project-card"
      style={{ '--preview-bg': project.previewBg, '--phone-frame': project.frameColor }}
    >
      <Link
        to={project.path}
        className="landing-project-card-media"
        tabIndex={-1}
        aria-hidden="true"
      >
        {project.previewType === 'web' ? (
          <WebProjectPreview project={project} compact={compact} />
        ) : (
          <div className="phone-preview">
            {project.images.slice(0, 2).map((image, index) => (
              <img
                className={`work-shot ${index === 0 ? 'primary-shot' : 'secondary-shot'}`}
                src={image}
                alt=""
                key={image}
              />
            ))}
          </div>
        )}
      </Link>

      <h3>
        <Link to={project.path}>{project.title}</Link>
      </h3>
      <p>{project.subtitle}</p>
      <span className="project-card-meta">{project.category}</span>
    </article>
  )
}
