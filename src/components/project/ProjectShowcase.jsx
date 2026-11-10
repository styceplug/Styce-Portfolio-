export default function ProjectShowcase({ project, images }) {
  const isWeb = project.previewType === 'web'
  const hasShowcase = Boolean(project.showcase)
  const desktopImage = project.showcase?.desktop ?? (hasShowcase ? undefined : images[0])
  const phoneImages = project.showcase?.phones?.filter(Boolean) ?? []
  const webImages = project.showcase?.webScreens?.filter(Boolean) ?? []
  const isMobileOnly = !desktopImage && phoneImages.length > 0
  const previewPhones = phoneImages.slice(0, isMobileOnly ? 2 : 1)
  const showcaseMode = isMobileOnly
    ? 'phone-cascade-showcase'
    : desktopImage && previewPhones.length > 0
      ? 'mixed-product-showcase'
      : isWeb && webImages.length > 0
        ? 'web-composite-showcase'
        : 'single-desktop-showcase'

  if (!desktopImage && previewPhones.length === 0) return null

  return (
    <section
      className={`product-showcase ${showcaseMode} showcase-phone-count-${previewPhones.length}`}
      aria-label={`${project.title} product visuals`}
      style={{
        '--showcase-bg': project.previewBg ?? '#eef9ff',
        '--showcase-accent': project.webAccent ?? '#27c2df',
        '--showcase-frame': project.frameColor ?? '#ffffff',
      }}
    >
      <div className="product-showcase-copy">
        <span>{project.service}</span>
        <h2>{project.title}</h2>
        <p>{project.subtitle}</p>
      </div>
      <div className="product-showcase-art">
        <div className="showcase-dots" aria-hidden="true"></div>
        <div className="showcase-orb" aria-hidden="true"></div>
        {desktopImage && (
          <div className="showcase-laptop">
            <span></span>
            <img src={desktopImage} alt="" />
          </div>
        )}
        {previewPhones.map((image, index) => (
          <div className={`showcase-phone showcase-phone-${index + 1}`} key={image}>
            <img src={image} alt="" />
          </div>
        ))}
        {webImages.map((image, index) => (
          <div className={`showcase-web-card showcase-web-card-${index + 1}`} key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}
