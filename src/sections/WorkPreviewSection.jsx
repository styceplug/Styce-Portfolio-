import { Link } from '../router/Router.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { SectionLabel } from '../components/Section.jsx'
import { featuredProjects, projects } from '../data/projects.js'

export default function WorkPreviewSection() {
  return (
    <section className="project-description-page" id="work" aria-labelledby="work-title">
      <SectionLabel>WORK</SectionLabel>
      <h2 id="work-title">Bringing stellar results for every client.</h2>

      <div className="project-preview-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>

      <Link className="outline-action" to="/work">
        View all {projects.length} projects
      </Link>
    </section>
  )
}
