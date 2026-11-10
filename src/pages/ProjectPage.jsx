import { Link } from '../router/Router.jsx'
import ProjectShowcase from '../components/project/ProjectShowcase.jsx'
import ProjectGallery, { ProjectConclusionVisual } from '../components/project/ProjectGallery.jsx'
import ProjectLinks from '../components/project/ProjectLinks.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ContactCards from '../sections/ContactCards.jsx'
import { getRelatedProjects } from '../data/projects.js'

export default function ProjectPage({ project }) {
  const detailImages = project.detailImages.filter(Boolean)
  const conclusionImage = project.showcase?.conclusionDesktop ?? project.showcase?.desktop
  const relatedProjects = getRelatedProjects(project)

  return (
    <>
      <nav className="detail-header" aria-label="Breadcrumb">
        <Link to="/work">← All projects</Link>
        <span className="detail-breadcrumb-current">{project.title}</span>
      </nav>

      <section className="detail-hero" id="overview">
        <p>{project.title}</p>
        <strong>{project.productDetails}</strong>
        <h1>{project.summary}</h1>
        <dl>
          {[
            ['Service', project.service],
            ['Duration', project.duration],
            ['Tools', project.tools],
            ['Client', project.client],
          ]
            .filter(([, value]) => value)
            .map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
        </dl>
        <ProjectLinks project={project} />
      </section>

      <ProjectShowcase project={project} images={detailImages} />

      <section className="detail-two-column" id="challenge">
        <article>
          <h2>Summary</h2>
          <p>{project.summary}</p>
        </article>
        <article>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </article>
      </section>

      <ProjectGallery project={project} images={detailImages} />

      <section className="detail-writeup" id="process">
        <h2>What I did</h2>
        <ol>
          {project.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </section>

      <section className="detail-conclusion" id="conclusion">
        <h2>Conclusion</h2>
        <p>{project.conclusion}</p>
        <ProjectConclusionVisual image={conclusionImage} project={project} />
      </section>

      <section className="detail-more-work" id="more-work" aria-labelledby="more-work-title">
        <h2 id="more-work-title">More work</h2>
        <div className="project-preview-grid related-grid">
          {relatedProjects.map((item) => (
            <ProjectCard project={item} key={item.slug} compact />
          ))}
        </div>
      </section>

      <ContactCards />
    </>
  )
}
