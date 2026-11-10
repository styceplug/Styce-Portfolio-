import { Link } from '../router/Router.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import StatsGrid from '../components/StatsGrid.jsx'
import TrustedLogoMarquee from '../components/TrustedLogoMarquee.jsx'

export default function TrustSection() {
  return (
    <section className="about-page" id="about" aria-label="About and social proof">
      <ReviewCard label="ABOUT" />

      <div className="trust-panel">
        <h2>Trusted by the fastest growing digital startups</h2>
        <StatsGrid />
        <TrustedLogoMarquee />
        <Link className="outline-action" to="/about">
          More about me
        </Link>
      </div>
    </section>
  )
}
