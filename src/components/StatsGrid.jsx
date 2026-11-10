import { stats } from '../data/site.js'

export default function StatsGrid() {
  return (
    <div className="stats-grid" aria-label="Professional statistics">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
