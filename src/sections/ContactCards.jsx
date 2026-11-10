import { linkedinUrl, owner } from '../data/site.js'

/** Email + LinkedIn pairing used at the end of the inner pages. */
export default function ContactCards({ id = 'contact' }) {
  return (
    <section className="about-contact-card" id={id} aria-label="Contact">
      <div className="about-email-card">
        <span>Email me at</span>
        <a href={`mailto:${owner.email}`}>{owner.email}</a>
      </div>
      <div className="about-linkedin-card">
        <p>Would like to learn about my journey as a designer?</p>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>Because resumes are old fashioned now</span>
        <strong>in</strong>
      </div>
    </section>
  )
}
