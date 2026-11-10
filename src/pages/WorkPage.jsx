import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import ContactCards from '../sections/ContactCards.jsx'
import { projectSections, projects } from '../data/projects.js'

const tabs = [{ id: 'all', label: 'All' }, ...projectSections]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('all')

  const visibleSections = projectSections.filter(
    (section) => section.projects.length > 0 && (activeTab === 'all' || section.id === activeTab),
  )

  return (
    <>
      <section className="page-hero" id="intro">
        <p className="page-kicker">Work</p>
        <h1>Products I have designed, engineered, and shipped.</h1>
        <p className="page-lead">
          {projects.length} projects across healthcare, marketplaces, fintech, logistics, real
          estate, and edtech — from first Figma frame to live websites and published app store
          releases.
        </p>
      </section>

      <section className="work-index" id="projects" aria-label="All projects">
        <div className="work-filters" role="group" aria-label="Show web or app projects">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={tab.id === activeTab ? 'is-active' : undefined}
              aria-pressed={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span className="work-filter-count">
                {tab.id === 'all' ? projects.length : tab.projects.length}
              </span>
            </button>
          ))}
        </div>

        {visibleSections.map((section) => (
          <div className="work-section" id={section.id} key={section.id}>
            <header className="work-section-header">
              <h2>{section.title}</h2>
              <span>
                {section.projects.length} {section.projects.length === 1 ? 'project' : 'projects'}
              </span>
            </header>

            <div className="project-preview-grid work-grid">
              {section.projects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <ContactCards />
    </>
  )
}
