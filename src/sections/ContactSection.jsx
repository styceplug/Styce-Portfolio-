import { owner } from '../data/site.js'

/** Compact contact band used at the end of the home page. */
export default function ContactSection() {
  return (
    <section className="contact-page" id="contact" aria-label="Contact">
      <div>
        <span>Say hello</span>
        <a href={`mailto:${owner.email}`}>{owner.email}</a>
      </div>
    </section>
  )
}
