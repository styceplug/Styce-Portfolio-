import twitterLogo from '../assets/logo/logo-twitter.png'
import dribbbleLogo from '../assets/logo/logo-dribbble.png'
import instagramLogo from '../assets/logo/logo-instagram.png'
import linkedinLogo from '../assets/logo/logo-linkedin.png'
import behanceLogo from '../assets/logo/logo-behance.png'
import githubLogo from '../assets/logo/logo-github.png'
import snapchatLogo from '../assets/logo/logo-snapchat.png'
import whatsappLogo from '../assets/logo/logo-whatsapp.png'
import tiktokLogo from '../assets/logo/logo-tiktok.png'
import rheeltechLogo from '../assets/trusted-by/rheeltech.webp'
import dreamstuLogo from '../assets/trusted-by/dreamstu.webp'
import friendlyLogo from '../assets/trusted-by/friendly.webp'
import otonavLogo from '../assets/trusted-by/otonav-logo.webp'

export const siteUrl = 'https://styce.ng'

export const owner = {
  name: 'Oluwaferanmi Olotu',
  shortName: 'Oluwaferanmi',
  role: 'Senior Software & Mobile App Developer',
  email: 'styceplug@gmail.com',
  studio: 'Dream Software Studios',
}

export const resumeUrl = '/oluwaferanmi-olotu-resume.pdf'
export const linkedinUrl = 'https://www.linkedin.com/in/uibystyce/'
export const whatsappUrl = 'https://wa.me/2348023590291'

/**
 * Primary navigation. Every entry is a real page with its own URL, so the
 * header behaves the same way no matter which page is being viewed.
 */
export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = [
  { label: 'Behance', icon: behanceLogo, href: 'https://www.behance.net/ferrystyce' },
  { label: 'Dribbble', icon: dribbbleLogo, href: 'https://dribbble.com/Styce' },
  { label: 'GitHub', icon: githubLogo, href: 'https://github.com/styceplug/' },
  {
    label: 'Instagram',
    icon: instagramLogo,
    href: 'https://www.instagram.com/styce_btw?igsh=MXN5YTY2c2V6YXF4Mg%3D%3D&utm_source=qr',
  },
  { label: 'LinkedIn', icon: linkedinLogo, href: linkedinUrl },
  { label: 'WhatsApp', icon: whatsappLogo, href: whatsappUrl },
  { label: 'TikTok', icon: tiktokLogo, href: 'https://www.tiktok.com/@styceplug?_r=1&_t=ZS-977lDDhaxcu' },
  { label: 'Snapchat', icon: snapchatLogo, href: 'https://snapchat.com/t/MQVEAD8c' },
  { label: 'Twitter', icon: twitterLogo, href: 'https://x.com/i_am_styce?s=21' },
]

export const trustedLogos = [
  { label: 'Rheeltech', logo: rheeltechLogo },
  { label: 'Dreamstu', logo: dreamstuLogo },
  { label: 'Friendly', logo: friendlyLogo },
  { label: 'Otonav', logo: otonavLogo },
]

export const stats = [
  { value: '7+', label: 'Years of engineering & design experience' },
  { value: '27+', label: 'Public builds & applications launched' },
  { value: '20+', label: 'Product screens shipped' },
  { value: '13k+', label: 'Engaged community followers' },
]

export const techStack = ['Dart', 'Flutter', 'Firebase', 'ReactJS', 'NodeJS', 'Typescript', 'REST APIs']

export const review = {
  quote:
    'Working with Oluwaferanmi was interesting. He went above and beyond what I was asking for and provided a thoughtful design direction for my mobile application.',
  name: 'Odera Muoma',
  title: 'CEO Rheel Tech',
}
