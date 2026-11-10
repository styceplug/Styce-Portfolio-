export default function WebProjectPreview({ project, compact = false }) {
  const previewImage = project.images?.find(Boolean)

  return (
    <div
      className={`web-preview ${compact ? 'web-preview-compact' : ''}`.trim()}
      style={{ '--preview-bg': project.previewBg, '--web-accent': project.webAccent }}
      aria-hidden="true"
    >
      <div className="browser-frame">
        <div className="browser-toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`browser-body ${previewImage ? 'has-screenshot' : ''}`.trim()}>
          {previewImage ? (
            <img className="browser-screenshot" src={previewImage} alt="" />
          ) : (
            <>
              <div className="browser-copy">
                <strong>{project.title}</strong>
                <i>{project.websiteUrl ? new URL(project.websiteUrl).hostname.replace(/^www\./, '') : project.tools}</i>
              </div>
              <div className="browser-panel large"></div>
              <div className="browser-panel"></div>
              <div className="browser-panel short"></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
