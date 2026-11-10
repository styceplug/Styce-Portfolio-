import HeroSection from '../sections/HeroSection.jsx'
import TrustSection from '../sections/TrustSection.jsx'
import WorkPreviewSection from '../sections/WorkPreviewSection.jsx'
import HighlightsSection from '../sections/HighlightsSection.jsx'
import JournalSection from '../sections/JournalSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'

/**
 * The home page is a tour: every section previews a page and links to it.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WorkPreviewSection />
      <HighlightsSection />
      <JournalSection />
      <ContactSection />
    </>
  )
}
