import heroImg from '../../assets/hero.webp'
import { aboutIntro } from '../../data/about.js'
import { owner, resumeUrl } from '../../data/site.js'

export default function AboutIntroSection() {
  return (
    <section className="about-hero" id="intro" aria-label="Introduction">
      <div className="about-hero-inner">
        <p className="about-kicker">About me</p>
        <img src={heroImg} alt={owner.name} />
        <div className="about-hero-copy">
          <h1>{aboutIntro.headline}</h1>
          <p>{aboutIntro.body}</p>
          <a href={resumeUrl} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
