import { useState } from 'react'
import { aboutStatements, careerTimeline } from '../../data/about.js'

export default function JourneySection() {
  const [openYear, setOpenYear] = useState(careerTimeline[0].year)

  return (
    <section className="about-timeline" id="journey" aria-labelledby="journey-title">
      <p className="about-statement">{aboutStatements[0]}</p>

      <h2 className="journey-heading" id="journey-title">
        The Journey
      </h2>

      {careerTimeline.map((item) => (
        <article className={openYear === item.year ? 'is-open' : undefined} key={item.year}>
          <button
            type="button"
            aria-expanded={openYear === item.year}
            aria-controls={`journey-${item.year}`}
            onClick={() => setOpenYear(openYear === item.year ? '' : item.year)}
          >
            <strong>{item.year}</strong>
            <span>{item.role}</span>
          </button>
          <div className="journey-panel" id={`journey-${item.year}`} hidden={openYear !== item.year}>
            <p>{item.text}</p>
          </div>
        </article>
      ))}

      <p className="about-statement">{aboutStatements[1]}</p>
    </section>
  )
}
