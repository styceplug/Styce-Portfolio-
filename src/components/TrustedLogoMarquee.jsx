import { trustedLogos } from '../data/site.js'

export default function TrustedLogoMarquee() {
  return (
    <div className="trusted-logos" aria-label="Trusted by">
      <div className="trusted-logo-track">
        {[...trustedLogos, ...trustedLogos].map(({ label, logo }, index) => (
          <span
            className="trusted-logo"
            key={`${label}-${index}`}
            aria-hidden={index >= trustedLogos.length}
          >
            <img src={logo} alt={index < trustedLogos.length ? label : ''} />
          </span>
        ))}
      </div>
    </div>
  )
}
