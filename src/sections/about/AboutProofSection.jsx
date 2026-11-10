import ReviewCard from '../../components/ReviewCard.jsx'
import StatsGrid from '../../components/StatsGrid.jsx'
import TrustedLogoMarquee from '../../components/TrustedLogoMarquee.jsx'

export default function AboutProofSection() {
  return (
    <section className="about-proof" id="numbers" aria-labelledby="numbers-title">
      <ReviewCard className="about-review-card" />

      <div className="about-proof-right">
        <h2 id="numbers-title">By The Numbers</h2>
        <StatsGrid />
        <TrustedLogoMarquee />
      </div>
    </section>
  )
}
