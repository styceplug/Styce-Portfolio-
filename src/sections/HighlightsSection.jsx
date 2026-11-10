import { useState } from 'react'
import prioritizeCard from '../assets/card/prioritize.webp'
import zoneBg from '../assets/card/zone-bg.webp'
import scoopBg from '../assets/card/scoop-bg.webp'
import ideSnap from '../assets/card/ide-snap.webp'
import passionGlass from '../assets/card/passion-glassmorphism.png'
import leftChat from '../assets/card/left-chat.png'
import rightChat from '../assets/card/right-chat.png'
import copyIcon from '../assets/card/copy-icon.png'
import { owner, techStack } from '../data/site.js'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(owner.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = `mailto:${owner.email}`
    }
  }

  return (
    <button type="button" onClick={copyEmail}>
      <img src={copyIcon} alt="" />
      {copied ? 'Email address copied' : 'Copy my email address'}
    </button>
  )
}

export default function HighlightsSection() {
  return (
    <section className="dark-feature-section" id="highlights" aria-label="How I work">
      <div className="feature-grid">
        <article className="feature-card feature-prioritize">
          <img className="prioritize-img" src={prioritizeCard} alt="" />
          <img className="left-chat" src={leftChat} alt="" />
          <img className="right-chat" src={rightChat} alt="" />
          <h3>I prioritize client collaboration, fostering open communication</h3>
        </article>

        <article className="feature-card feature-zone">
          <img src={zoneBg} alt="" />
          <h3>I&apos;m very flexible with time-zone communications</h3>
          <span className="zone-pill usa">USA</span>
          <span className="zone-pill germany">Germany</span>
          <span className="zone-pill russia">Russia</span>
        </article>

        <article className="feature-card feature-passion">
          <h3>Tech enthusiast with a passion for development.</h3>
          <img src={passionGlass} alt="" />
        </article>

        <article className="feature-card feature-stack">
          <p>I constantly try to improve</p>
          <h3>My tech stack</h3>
          <div className="stack-list" aria-label="Tech stack">
            <div className="stack-track">
              {[...techStack, ...techStack].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="feature-card feature-cta">
          <h3>Do you want to start a project together?</h3>
          <CopyEmailButton />
        </article>

        <article className="feature-card feature-scoop">
          <img className="scoop-bg" src={scoopBg} alt="" />
          <img className="ide-snap" src={ideSnap} alt="" />
          <p>The inside scoop</p>
          <h3>Currently building mobile products with real-time interactions</h3>
        </article>
      </div>
    </section>
  )
}
