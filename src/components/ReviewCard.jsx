import reviewPfp from '../assets/review-pfp.webp'
import { review } from '../data/site.js'
import { SectionLabel } from './Section.jsx'

export default function ReviewCard({ label, className = 'review-card' }) {
  return (
    <article className={className}>
      {label && <SectionLabel>{label}</SectionLabel>}

      <div className="rating" aria-label="Five star review">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <p>{review.quote}</p>

      <div className="reviewer">
        <img src={reviewPfp} alt="" />
        <div>
          <strong>{review.name}</strong>
          <span>{review.title}</span>
        </div>
      </div>
    </article>
  )
}
