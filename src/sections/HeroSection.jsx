import heroImg from '../assets/hero.webp'
import { Link } from '../router/Router.jsx'
import { owner } from '../data/site.js'

export default function HeroSection() {
  return (
    <section className="landing-page" id="hero" aria-label="Introduction">
      <div className="hero-copy">
        <h1>
          {owner.name},<span>Freelancer,</span>
          <mark>Software developer</mark>
        </h1>
        <p>
          Hello, I am a product designer and software developer working with teams across borders. I
          design and build scalable mobile apps, dashboards, and responsive interfaces for startups and
          ambitious teams.
        </p>
        <div className="hero-actions">
          <Link className="solid-action" to="/work">
            View my work
          </Link>
          <a className="text-action" href="#work">
            Scroll down
          </a>
        </div>
      </div>

      <div className="hero-image-wrap" aria-label={`${owner.name} portrait`}>
        <div className="hero-cyan-block"></div>
        <div className="hero-dots"></div>
        <img src={heroImg} alt={owner.name} />
      </div>
    </section>
  )
}
