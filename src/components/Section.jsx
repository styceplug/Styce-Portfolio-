export function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span></span>
      <small>{children}</small>
    </div>
  )
}

/**
 * Section primitive: an anchorable, labelled band of a page. Sections never
 * own navigation state — they are addressed by their `id` from the page URL.
 */
export default function Section({ id, label, title, lead, actions, className = '', children }) {
  const headingId = id && title ? `${id}-title` : undefined

  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={headingId}>
      {(label || title || lead) && (
        <div className="section-head">
          {label && <SectionLabel>{label}</SectionLabel>}
          {title && (
            <h2 id={headingId} className="section-title">
              {title}
            </h2>
          )}
          {lead && <p className="section-lead">{lead}</p>}
        </div>
      )}

      {children}

      {actions && <div className="section-actions">{actions}</div>}
    </section>
  )
}
