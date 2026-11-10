import ContactCards from '../sections/ContactCards.jsx'
import { owner, resumeUrl, socialLinks, whatsappUrl } from '../data/site.js'

const channels = [
  { label: 'Email', value: owner.email, href: `mailto:${owner.email}` },
  { label: 'WhatsApp', value: 'Message directly', href: whatsappUrl },
  { label: 'Resume', value: 'Download PDF', href: resumeUrl },
]

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" id="intro">
        <p className="page-kicker">Contact</p>
        <h1>Let’s build something worth shipping.</h1>
        <p className="page-lead">
          Product design, mobile apps, web platforms, or a full end-to-end build — tell me what you are
          working on and I will come back with a clear plan and timeline.
        </p>
      </section>

      <section className="contact-channels" id="channels" aria-label="Direct channels">
        {channels.map(({ label, value, href }) => (
          <a
            className="contact-channel"
            key={label}
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : null)}
          >
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </section>

      <ContactCards id="say-hello" />

      <section className="contact-social" id="social" aria-labelledby="social-title">
        <h2 id="social-title">Find me elsewhere</h2>
        <div>
          {socialLinks.map(({ label, icon, href }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer">
              <img src={icon} alt="" />
              {label}
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
