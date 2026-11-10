export default function ProjectGallery({ project, images }) {
  const phoneImages = project.showcase?.phones?.filter(Boolean) ?? []
  const galleryPhones = phoneImages.slice(0, 3)
  const webImages = [project.showcase?.desktop, ...(project.showcase?.webScreens ?? [])].filter(Boolean)
  const fallbackImages = images.slice(0, 2).filter(Boolean)

  if (galleryPhones.length > 0) {
    return (
      <section
        className={`detail-device-gallery detail-phone-gallery phone-count-${galleryPhones.length}`}
        aria-label={`${project.title} screens`}
        style={{
          '--showcase-bg': project.previewBg ?? '#eef9ff',
          '--showcase-frame': project.frameColor ?? '#ffffff',
        }}
      >
        {galleryPhones.map((image, index) => (
          <div className={`detail-phone detail-phone-${index + 1}`} key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      </section>
    )
  }

  if (webImages.length > 0) {
    return (
      <section
        className="detail-device-gallery detail-web-gallery"
        aria-label={`${project.title} screens`}
        style={{ '--showcase-bg': project.previewBg ?? '#eef9ff' }}
      >
        {webImages.slice(0, 2).map((image, index) => (
          <div className={`detail-browser detail-browser-${index + 1}`} key={image}>
            <span></span>
            <img src={image} alt="" />
          </div>
        ))}
      </section>
    )
  }

  if (fallbackImages.length === 0) return null

  return (
    <section className="detail-image-pair" aria-label={`${project.title} screens`}>
      {fallbackImages.map((image) => (
        <img src={image} alt="" key={image} />
      ))}
    </section>
  )
}

export function ProjectConclusionVisual({ image, project }) {
  if (!image) return null

  return (
    <div className="detail-conclusion-browser" style={{ '--showcase-bg': project.previewBg ?? '#eef9ff' }}>
      <div>
        <span></span>
        <img src={image} alt="" />
      </div>
    </div>
  )
}
