import { useState } from 'react'
import heroImg from './assets/hero.jpg'
import reviewPfp from './assets/review-pfp.png'
import rheeltechLogo from './assets/trusted-by/rheeltech.png'
import dreamstuLogo from './assets/trusted-by/dreamstu 1 (1).png'
import friendlyLogo from './assets/trusted-by/friendly.png'
import otonavLogo from './assets/trusted-by/otonav-logo.png'
import twitterLogo from './assets/logo/logo-twitter.png'
import dribbbleLogo from './assets/logo/logo-dribbble.png'
import instagramLogo from './assets/logo/logo-instagram.png'
import linkedinLogo from './assets/logo/logo-linkedin.png'
import behanceLogo from './assets/logo/logo-behance.png'
import githubLogo from './assets/logo/logo-github.png'
import snapchatLogo from './assets/logo/logo-snapchat.png'
import whatsappLogo from './assets/logo/logo-whatsapp.png'
import tiktokLogo from './assets/logo/logo-tiktok.png'
import prioritizeCard from './assets/card/prioritize.png'
import zoneBg from './assets/card/zone-bg.png'
import scoopBg from './assets/card/scoop-bg.png'
import ideSnap from './assets/card/ide-snap.png'
import passionGlass from './assets/card/passion-glassmorphism.png'
import leftChat from './assets/card/left-chat.png'
import rightChat from './assets/card/right-chat.png'
import copyIcon from './assets/card/copy-icon.png'
import productDesignIcon from './assets/product design.png'
import mobileEngineeringIcon from './assets/mobile-engineering.png'
import webDesignIcon from './assets/web-design.png'
import './App.css'

const navItems = [
  ['Home', 'landing'],
  ['About', 'about'],
  ['Project', 'project-description'],
  ['Blog', 'blog'],
  ['Contact', 'contact'],
]

const resumeUrl = '/oluwaferanmi-olotu-resume.pdf'
const linkedinUrl = 'https://www.linkedin.com/in/uibystyce/'
const whatsappUrl = 'https://wa.me/2348023590291'

const socialLinks = [
  ['Behance', behanceLogo, 'https://www.behance.net/ferrystyce'],
  ['Dribbble', dribbbleLogo, 'https://dribbble.com/Styce'],
  ['GitHub', githubLogo, 'https://github.com/styceplug/'],
  [
    'Instagram',
    instagramLogo,
    'https://www.instagram.com/styce_btw?igsh=MXN5YTY2c2V6YXF4Mg%3D%3D&utm_source=qr',
  ],
  ['LinkedIn', linkedinLogo, linkedinUrl],
  ['WhatsApp', whatsappLogo, whatsappUrl],
  ['TikTok', tiktokLogo, 'https://www.tiktok.com/@styceplug?_r=1&_t=ZS-977lDDhaxcu'],
  ['Snapchat', snapchatLogo, 'https://snapchat.com/t/MQVEAD8c'],
  ['Twitter', twitterLogo, 'https://x.com/i_am_styce?s=21'],
]

const trustedLogos = [
  ['Rheeltech', rheeltechLogo],
  ['Dreamstu', dreamstuLogo],
  ['Friendly', friendlyLogo],
  ['Otonav', otonavLogo],
]

function TrustedLogoMarquee() {
  return (
    <div className="trusted-logos" aria-label="Trusted by">
      <div className="trusted-logo-track">
        {[...trustedLogos, ...trustedLogos].map(([label, logo], index) => (
          <span className="trusted-logo" key={`${label}-${index}`} aria-hidden={index >= trustedLogos.length}>
            <img src={logo} alt={index < trustedLogos.length ? label : ''} />
          </span>
        ))}
      </div>
    </div>
  )
}

const stats = [
  ['7+', 'Years of engineering & design experience'],
  ['27+', 'Public builds & applications launched'],
  ['20+', 'Product screens shipped'],
  ['13k+', 'Engaged community followers'],
]

const aboutServices = [
  {
    title: 'Product Design',
    icon: productDesignIcon,
    items: ['Figma & Design Systems', 'UX Flows & Rapid Prototyping', 'Mobile UI & Calming Interfaces'],
  },
  {
    title: 'Mobile Engineering',
    icon: mobileEngineeringIcon,
    items: ['Flutter & Dart', 'Firebase & WebSockets', 'Maps APIs & Real-time Tracking'],
  },
  {
    title: 'Web, Backend & Systems',
    icon: webDesignIcon,
    items: ['React & JavaScript', 'Responsive UI & Admin Dashboards', 'End-to-End Project Management'],
  },
]

const techStack = ['Dart', 'Flutter', 'Firebase', 'ReactJS', 'NodeJS', 'Typescript', 'REST APIs']

const careerTimeline = [
  {
    year: '2026',
    role: 'Senior Software Developer & Agency Lead',
    text: 'Leading Dream Software Studios and directing end-to-end software solutions. Shipping complex, large-scale mobile products spanning delivery visibility and anti-fraud tools (Otonav), EV mobility suites (JD Mobile Station), and high-performance video networks for creators (HILITE).',
  },
  {
    year: '2025',
    role: 'Agency Building & Tech Content Creation',
    text: 'Expanded Dream Software Studios to handle comprehensive internal and client products. Scaled a digital audience to over 13,000 followers as a tech creator (@styceplug), sharing software development insights and gadget reviews.',
  },
  {
    year: '2024',
    role: 'Flutter & Mobile Engineering',
    text: 'Transitioned deeply into cross-platform mobile architecture utilizing Flutter and Dart. Focused on real-time data flows, WebSockets, and creating launch-ready MVPs like the Fyndr service marketplace.',
  },
  {
    year: '2023',
    role: 'Computer Engineering & Systems Architecture',
    text: 'Navigated the rigors of a Computer Engineering degree, graduating with a high CGPA. Bridged theoretical computer science with practical, scalable product building and backend logic.',
  },
  {
    year: '2022',
    role: 'Web Interfaces & Responsive UI',
    text: 'Expanded technical capabilities into frontend web development. Designed and developed responsive web experiences, comprehensive admin dashboards, and robust landing pages using React and JavaScript.',
  },
  {
    year: '2021',
    role: 'Product Designing',
    text: 'Dived fully into UI/UX. Focused intensely on Figma, establishing design systems, mapping out complex UX flows, and turning messy product ideas into calm, user-centric interfaces.',
  },
  {
    year: '2020',
    role: 'Freelance Distribution for Mobile Apps on Stores',
    text: 'Managed freelance distribution and deployment for mobile applications, navigating the complexities of app store guidelines, approvals, and getting builds successfully into the hands of users.',
  },
  {
    year: '2019',
    role: 'The Beginning (No-Code Softwares)',
    text: 'Took the first steps into the tech landscape by exploring no-code platforms. Discovered a deep passion for building functional digital products, solving problems, and understanding how users interact with software.',
  },
]

const workImages = import.meta.glob('./assets/work/**/*.{png,PNG,jpg,jpeg,JPG,JPEG}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const getWorkImage = (path) => workImages[`./assets/work/${path}`]

const blogPosts = [
  {
    title: 'AI Is Making Product UX More Ambient',
    category: 'Product thinking',
    image: getWorkImage('fyndr/landing-hero.png'),
    sourceLabel: 'HAX framework',
    sourceUrl: 'https://arxiv.org/abs/2512.11979',
    excerpt:
      'The next wave of product design is less about adding a giant AI button and more about making assistance feel contextual, quiet, and useful inside existing workflows.',
    intro:
      'AI is moving from novelty feature to background infrastructure. The interesting design question is no longer “where do we place the chatbot?” It is how products can become more helpful without becoming noisier, less predictable, or harder to trust.',
    sections: [
      {
        heading: 'Assistance Should Stay In The Flow',
        body:
          'The best AI product patterns are usually not loud. A marketplace can suggest safer request wording, a logistics app can summarize delivery risk, and a creator tool can recommend the next action without interrupting the user. That kind of assistance works because it is embedded in the job the user already came to do.',
      },
      {
        heading: 'Trust Needs Interface Detail',
        body:
          'AI features need visible confidence, editable outputs, and clear recovery paths. Users should know what changed, why it was suggested, and how to undo it. Without that layer of interface honesty, even a powerful model can make the product feel risky.',
      },
      {
        heading: 'The Designer’s Job Gets More Important',
        body:
          'As AI handles more generation, the designer’s responsibility shifts toward orchestration: deciding when automation should appear, how much control the user keeps, and how the product communicates uncertainty without creating anxiety.',
      },
    ],
  },
  {
    title: 'Adaptive Apps Are Becoming The New Baseline',
    category: 'Mobile',
    image: getWorkImage('rheel/landing-about.png'),
    sourceLabel: 'Flutter docs',
    sourceUrl: 'https://docs.flutter.dev/ui/adaptive-responsive',
    excerpt:
      'Phones, tablets, foldables, and desktop-class mobile modes are forcing product teams to think beyond one fixed mobile canvas.',
    intro:
      'Responsive design used to mean making a website shrink gracefully. For modern apps, it means building product surfaces that adapt to more screen sizes, input modes, navigation patterns, and user contexts without feeling like separate products.',
    sections: [
      {
        heading: 'One Screen Is Not The Product',
        body:
          'A property app, marketplace, or logistics dashboard should not simply stretch on larger screens. More room should reveal more useful context: maps beside listings, filters beside results, order history beside live status, and actions closer to the data they affect.',
      },
      {
        heading: 'Flutter Makes This Practical',
        body:
          'Flutter’s adaptive and responsive guidance makes it easier to build one codebase that respects different screen classes. The real value is not just speed; it is keeping product behavior consistent while allowing layouts to change intelligently.',
      },
      {
        heading: 'Design Systems Need Breakpoints Too',
        body:
          'Buttons, cards, forms, and navigation should have rules for phone, tablet, and wide layouts. When these decisions are captured inside the design system, teams stop patching each screen manually and start shipping interfaces that feel deliberate everywhere.',
      },
    ],
  },
  {
    title: 'Real-Time Products Need Calm State Design',
    category: 'Engineering',
    image: getWorkImage('otonav/landing-hero.png'),
    sourceLabel: 'Firebase docs',
    sourceUrl: 'https://firebase.google.com/docs/firestore/query-data/listen',
    excerpt:
      'Live tracking, chat, dispatch, order status, and collaborative products are only useful when the interface explains what is happening right now.',
    intro:
      'Real-time systems can make software feel alive, but they can also make it feel unstable. The interface has to translate constant backend changes into states that users can understand, trust, and act on.',
    sections: [
      {
        heading: 'Live Data Needs Human Language',
        body:
          'It is not enough to update a screen instantly. Users need labels like “waiting for rider,” “driver is nearby,” “payment pending,” or “vendor accepted.” These states reduce confusion because they turn infrastructure events into human-readable progress.',
      },
      {
        heading: 'Optimistic UI Requires Recovery',
        body:
          'Fast interfaces often show changes before the server confirms them. That can feel great, but only when failure states are designed too. Undo actions, retry controls, and clear error messages are part of the experience, not edge-case decoration.',
      },
      {
        heading: 'The Best Real-Time UI Feels Quiet',
        body:
          'A delivery platform or marketplace should not flash every small update like an alarm. It should prioritize what changed, who needs to act, and what can wait. Calm state design is what turns live data into a usable product.',
      },
    ],
  },
]

const projectCatalog = [
  {
    title: 'Social Media Manager Portfolio',
    subtitle:
      'A live portfolio website for Olasubomi Stephanie, built to present social media management work with a strong editorial feel.',
    productDetails: 'Live Portfolio Website for a Social Media Manager',
    summary:
      'This project is a live portfolio website for Olasubomi Stephanie, a freelance social media manager. The site introduces her positioning clearly, then moves into selected client work, skills, tools, service offers, and contact touchpoints in one polished web experience.',
    challenge:
      'The main challenge was creating a portfolio that feels confident and memorable without becoming noisy. The page needed to sell creative social media work, organize multiple client case entries, and keep the call to action visible for potential collaborators.',
    conclusion:
      'The final site gives the brand a clear, live web presence with a bold hero, structured work archive, and a straightforward path for prospects to start a conversation.',
    service: 'Website design & development',
    duration: '24hrs',
    tools: 'JavaScript, Responsive Web UI',
    client: 'Olasubomi Stephanie',
    githubUrl: 'https://github.com/styceplug/shubby',
    websiteUrl: 'https://olasubomi.com.ng/',
    previewType: 'web',
    previewBg: '#e7f8ff',
    frameColor: '#ffffff',
    webAccent: '#0b0b0b',
    tasks: [
      'Designed a bold portfolio landing experience for a social media manager.',
      'Structured selected work by client and service focus.',
      'Built responsive sections for skills, tools, offers, and contact.',
      'Published the project as a live website at olasubomi.com.ng.',
    ],
    images: [getWorkImage('shubby/homepage.png'), getWorkImage('shubby/work-section.png')],
    detailImages: [getWorkImage('shubby/homepage.png'), getWorkImage('shubby/work-section.png')],
    showcase: {
      desktop: getWorkImage('shubby/homepage.png'),
      webScreens: [getWorkImage('shubby/work-section.png')],
    },
  },
  {
    title: 'Hilite Talent Network',
    subtitle: 'A high-performance video social network for football creators.',
    productDetails: 'High-Performance Video-Based Social Network for Football Creators',
    summary:
      'HILITE is a specialized, video-first social networking platform designed exclusively for football creators. It provides a dedicated ecosystem for athletes, analysts, and fans to share highlights, engage in real-time, and build community around the sport.',
    challenge:
      'Building a video-heavy social platform presents significant architectural hurdles. The core challenge was ensuring high-volume video delivery without lagging or severe data consumption, alongside maintaining perfectly synced, real-time interactions across a rapidly growing user base.',
    conclusion:
      'HILITE successfully delivers a premium, niche social experience without compromising on media performance. By prioritizing optimized video streaming and real-time data flow, the platform gives football creators a powerful, professional-grade tool to showcase their talent and connect with their audience.',
    service: 'Software Development (Mobile & Backend Architecture)',
    duration: '8 weeks',
    tools: 'Flutter, Dart, Video Streaming Protocols, Real-Time Database/WebSockets',
    client: 'Internal / Dream Software Studios',
    githubUrl: 'https://github.com/styceplug/HILITE-',
    frameColor: '#07111f',
    previewBg: '#d9f5ff',
    images: [getWorkImage('hilite/discover.PNG'), getWorkImage('hilite/reels.PNG')],
    detailImages: [
      getWorkImage('hilite/discover.PNG'),
      getWorkImage('hilite/messaging.PNG'),
      getWorkImage('hilite/reels.PNG'),
      getWorkImage('hilite/activities.PNG'),
      getWorkImage('hilite/profile.PNG'),
    ],
    showcase: {
      phones: [
        getWorkImage('hilite/discover.PNG'),
        getWorkImage('hilite/reels.PNG'),
        getWorkImage('hilite/profile.PNG'),
      ],
    },
    tasks: [
      'Architected and developed the complete mobile experience using Flutter and Dart.',
      'Optimized the UI for a seamless, vertical video feed.',
      'Engineered backend support for heavy payload transfers, video caching, compression, and CDN delivery.',
      'Built scalable WebSocket connections so likes, comments, and shares register instantly.',
    ],
  },
  {
    title: 'Paylax Interface',
    subtitle: 'A compact fintech interface concept focused on clean payment and account actions.',
    productDetails: 'Fintech Web Interface',
    summary:
      'Paylax is a JavaScript fintech-facing interface project from Oluwaferanmi’s public work. It explores how payment, balance, and account actions can be presented in a simple web experience without overwhelming the user.',
    challenge:
      'Fintech interfaces need to feel direct, secure, and low-friction. The challenge was shaping a lightweight project entry that communicates that product direction clearly while final screenshots are still being prepared.',
    conclusion:
      'Paylax now sits in the portfolio as a web interface case, connected to GitHub and ready for richer screenshots when the final visual assets are added.',
    service: 'Web interface',
    duration: 'Public build',
    tools: 'JavaScript',
    client: 'Personal / Public GitHub',
    githubUrl: 'https://github.com/styceplug/Paylax',
    previewType: 'web',
    previewBg: '#f1fbf7',
    frameColor: '#ffffff',
    webAccent: '#0b2842',
    tasks: [
      'Built a public JavaScript interface project.',
      'Structured the project entry around fintech web UI work.',
      'Added a GitHub-backed case entry to the portfolio.',
      'Prepared the card for future screenshots.',
    ],
    detailImages: [],
    images: [],
  },
  {
    title: 'Fyndr Service Marketplace',
    subtitle:
      'A service provider and decluttering platform for customers, vendors, job requests, and local service discovery.',
    productDetails: 'Local Services Marketplace for Users and Vendors',
    summary:
      'Fyndr is a service provider and decluttering platform that helps customers discover trusted professionals while giving vendors a dedicated surface to manage service visibility, incoming jobs, customer requests, and decluttering workflows. The product balances user discovery with vendor operations in a single mobile ecosystem.',
    challenge:
      'The product needed to support both customer and vendor journeys without making the app feel fragmented. Users needed fast service discovery, while vendors needed job clarity, profile control, and a smooth way to switch between marketplace tasks.',
    conclusion:
      'The resulting experience makes service discovery approachable and gives vendors a stronger operating surface for managing local work from one app.',
    service: 'Marketplace app',
    duration: '10 weeks',
    tools: 'Flutter, Dart, Figma',
    client: 'Fyndr',
    githubUrl: 'https://github.com/styceplug/Fyndr_NG',
    appleUrl: 'https://apps.apple.com/us/app/fyndr-ng/id6747384887',
    websiteUrl: 'https://fyndr.ng/',
    frameColor: '#ffffff',
    previewBg: '#eff8e6',
    images: [getWorkImage('fyndr/user-home.PNG'), getWorkImage('fyndr/declutter.PNG')],
    detailImages: [
      getWorkImage('fyndr/landing-hero.png'),
      getWorkImage('fyndr/user-home.PNG'),
      getWorkImage('fyndr/vendor-home.PNG'),
      getWorkImage('fyndr/jobs.PNG'),
      getWorkImage('fyndr/declutter.PNG'),
      getWorkImage('fyndr/switch-user-vendor.PNG'),
    ],
    showcase: {
      desktop: getWorkImage('fyndr/landing-hero.png'),
      phones: [
        getWorkImage('fyndr/user-home.PNG'),
        getWorkImage('fyndr/vendor-home.PNG'),
        getWorkImage('fyndr/jobs.PNG'),
      ],
    },
    tasks: ['User and vendor flows', 'Service category structure', 'Job screens', 'Marketplace onboarding'],
  },
  {
    title: 'Smart Swatcher Studio',
    subtitle: 'An advanced hair color formulation and stylist social network.',
    productDetails: 'Advanced Hair Color Formulation & Stylist Social Network',
    summary:
      'Smart Swatcher is a highly specialized mobile ecosystem built for professional hair colorists and stylists. It combines a powerful color formulation engine with a social feed, real-time live rooms, and comprehensive profile analytics for digital creator engagement.',
    challenge:
      'Hair color formulation is an exact science involving base tones, underlying pigments, and developer strengths. Digitizing this required a predictive color matrix algorithm capable of rendering accurate visual previews and generating foolproof chemical formulas while still supporting community feeds and live rooms without UI lag.',
    conclusion:
      'Smart Swatcher successfully transforms the traditional salon workflow into an interactive, data-driven experience. By uniting chemical formulation tools with social features, the platform serves as both a day-to-day utility and a growth engine for professional hair creators.',
    service: 'Software Development (Mobile & Architecture)',
    duration: '9 weeks',
    tools: 'Flutter, Dart, WebSockets, Custom Color Matrix Algorithms, Advanced Analytics Engine',
    client: 'Internal / Dream Software Studios',
    githubUrl: 'https://github.com/styceplug/Smart-Swatcher',
    appleUrl: 'https://apps.apple.com/us/app/smart-swatcher/id6761035694',
    frameColor: '#ffffff',
    previewBg: '#f6eee9',
    images: [
      getWorkImage('smart-swatcher/dashboard.PNG'),
      getWorkImage('smart-swatcher/hair-formulator.PNG'),
    ],
    detailImages: [
      getWorkImage('smart-swatcher/dashboard.PNG'),
      getWorkImage('smart-swatcher/live-room.PNG'),
      getWorkImage('smart-swatcher/hair-formulator.PNG'),
      getWorkImage('smart-swatcher/feeds.PNG'),
      getWorkImage('smart-swatcher/profile.PNG'),
    ],
    showcase: {
      phones: [
        getWorkImage('smart-swatcher/dashboard.PNG'),
        getWorkImage('smart-swatcher/hair-formulator.PNG'),
        getWorkImage('smart-swatcher/live-room.PNG'),
      ],
    },
    tasks: [
      'Designed and engineered the full multi-feature mobile experience in Flutter and Dart.',
      'Developed a predictive formulation engine for dye ratios, procedures, and real-time color previews.',
      'Built the social feed and WebSocket-powered live rooms for tutorials and interaction.',
      'Engineered a profile analytics dashboard for impressions, engagement, reach, and creator growth.',
    ],
  },
  {
    title: 'Rheel Real Estate',
    subtitle:
      'A real-estate product for property discovery, inspections, realtor contact, and listing exploration.',
    productDetails: 'Real Estate Discovery Mobile App and Web Presence',
    summary:
      'Rheel makes real-estate discovery easier with clean listing views, property details, saved homes, realtor contact, and search-led navigation. The project also includes landing-page touchpoints that give the product a stronger public-facing presence.',
    challenge:
      'Real-estate products carry dense information: pricing, location, inspection flow, images, realtor details, and user intent. The interface needed to make that information feel trustworthy and easy to scan across mobile and web surfaces.',
    conclusion:
      'The project created a sharper discovery flow and a stronger visual language for presenting property inventory.',
    service: 'Real estate app',
    duration: '7 weeks',
    tools: 'Flutter, Dart, Figma',
    client: 'Rheel',
    githubUrl: 'https://github.com/styceplug/Rheel_Estate',
    appleUrl: 'https://apps.apple.com/us/app/rheel/id6467382726',
    playUrl: 'https://play.google.com/store/apps/details?id=rheel.easy.property.search',
    websiteUrl: 'https://rheel.ng/',
    frameColor: '#ffffff',
    previewBg: '#eef7f3',
    images: [getWorkImage('rheel/home.PNG'), getWorkImage('rheel/property-detail.PNG')],
    detailImages: [
      getWorkImage('rheel/landing-hero.png'),
      getWorkImage('rheel/web-home.png'),
      getWorkImage('rheel/home.PNG'),
      getWorkImage('rheel/property-detail.PNG'),
      getWorkImage('rheel/landing-about.png'),
      getWorkImage('rheel/splash.PNG'),
    ],
    showcase: {
      desktop: getWorkImage('rheel/landing-hero.png'),
      conclusionDesktop: getWorkImage('rheel/landing-about.png'),
      phones: [
        getWorkImage('rheel/home.PNG'),
        getWorkImage('rheel/property-detail.PNG'),
        getWorkImage('rheel/splash.PNG'),
      ],
    },
    tasks: ['Listing discovery', 'Property detail UI', 'Landing page sections', 'Search and save flows'],
  },
  {
    title: 'Digi-02 Mobility',
    subtitle: 'An eco-friendly EV ride-booking platform for clean urban transportation.',
    productDetails: 'Eco-Friendly EV Ride-Booking Platform',
    summary:
      'Digi-02 is a forward-thinking, eco-conscious ride-hailing platform operating exclusively with electric vehicles. It provides users with a premium, zero-emission transportation alternative while offering fleet managers and drivers a tailored ecosystem designed specifically for EV logistics.',
    challenge:
      'Standard ride-booking platforms are not optimized for electric vehicles. The primary challenge was building a real-time matching engine that handles traditional dispatching while accounting for live vehicle battery levels, range constraints, and routing to nearby charging hubs without delaying passengers.',
    conclusion:
      'Digi-02 successfully merges sustainable mobility with high-performance software. By addressing EV management directly within the app architecture, the platform delivers reliable green travel for passengers and a stress-free operational tool for drivers.',
    service: 'Software Development (Mobile & Backend)',
    duration: '6 weeks',
    tools: 'Flutter, Dart, Google Maps API, WebSockets (Live Tracking)',
    client: 'Digi-02',
    appleUrl: 'https://apps.apple.com/us/app/digivolt/id6766707727',
    frameColor: '#ffffff',
    previewBg: '#e6f0ff',
    images: [getWorkImage('digi-volt/home.PNG'), getWorkImage('digi-volt/ride-booking.PNG')],
    detailImages: [
      getWorkImage('digi-volt/home.PNG'),
      getWorkImage('digi-volt/ride-booking.PNG'),
      getWorkImage('digi-volt/profile.PNG'),
    ],
    showcase: {
      phones: [
        getWorkImage('digi-volt/home.PNG'),
        getWorkImage('digi-volt/ride-booking.PNG'),
        getWorkImage('digi-volt/profile.PNG'),
      ],
    },
    tasks: [
      'Architected a dual-sided platform with dedicated rider and driver applications.',
      'Integrated live geolocation tracking and dynamic routing.',
      'Built intelligent dispatch logic that checks ride requests against driver battery range.',
      'Created ride scheduling, upfront pricing, and carbon footprint savings tracking.',
    ],
  },
  {
    title: 'Smart Wage Workforce',
    subtitle: 'A geofenced attendance and automated payroll system.',
    productDetails: 'Geofenced Attendance & Automated Payroll System',
    summary:
      'Smart Wage is a comprehensive HR and fintech solution designed to bridge the gap between employee time-tracking and payroll processing. It gives employers a secure, automated system to monitor attendance with location-based constraints while handling one-click salary disbursements and digital payslip generation.',
    challenge:
      'Traditional attendance tracking is susceptible to buddy punching and manual errors, while payroll processing is often disconnected from actual attendance data. The challenge was implementing accurate geofencing without excessive battery drain, then connecting attendance data to secure payroll automation and verifiable payslips.',
    conclusion:
      'Smart Wage modernizes HR workflows by eliminating timesheet fraud and automating the financial pipeline from attendance to payout. The platform saves companies administrative hours while giving employees transparency around their earnings.',
    service: 'Software Development (Mobile & Backend Architecture)',
    duration: '5 weeks',
    tools: 'Flutter, Dart, Geolocation & Geofencing APIs, Payment Gateway Integration, Automated PDF Generation',
    client: 'Smart Wage',
    appleUrl: 'https://apps.apple.com/us/app/smart-wage/id6771790650',
    frameColor: '#ffffff',
    previewBg: '#e3f7fb',
    images: [getWorkImage('smart-wage/home.PNG'), getWorkImage('smart-wage/attendance.PNG')],
    detailImages: [
      getWorkImage('smart-wage/home.PNG'),
      getWorkImage('smart-wage/attendance.PNG'),
      getWorkImage('smart-wage/splash.PNG'),
    ],
    showcase: {
      phones: [
        getWorkImage('smart-wage/home.PNG'),
        getWorkImage('smart-wage/attendance.PNG'),
        getWorkImage('smart-wage/splash.PNG'),
      ],
    },
    tasks: [
      'Designed a dual-interface ecosystem for employers and employees.',
      'Integrated geolocation services for office-radius clock-in and clock-out verification.',
      'Built a payroll engine that calculates wages from logged hours and leave records.',
      'Implemented payment gateway integration and automated downloadable PDF payslips.',
    ],
  },
  {
    title: 'OtoNav Onboarding',
    subtitle:
      'A delivery visibility and anti-fraud tool with rider, vendor, and admin experiences for orders and tracking.',
    productDetails: 'Delivery Visibility and Anti-Fraud Tool',
    summary:
      'OtoNav is a delivery visibility and anti-fraud tool with rider, vendor, and admin surfaces for orders, route visibility, delivery tracking, analytics, and operational control. The project covers multiple product roles without losing the clarity of each workflow.',
    challenge:
      'The challenge was presenting a broad logistics system across multiple roles without blurring rider, vendor, and admin responsibilities. Each user type needed a clear home, action path, and feedback loop.',
    conclusion:
      'The final product direction creates a clearer operational map for logistics teams and a smoother onboarding path for each user type.',
    service: 'Logistics app',
    duration: '3 weeks',
    tools: 'Flutter, Dart, Figma',
    client: 'OtoNav',
    appleUrl: 'https://apps.apple.com/us/app/otonav/id6767193716',
    websiteUrl: 'https://www.otonav.com.ng/',
    frameColor: '#ffffff',
    previewBg: '#e4f8fc',
    images: [getWorkImage('otonav/user-home.PNG'), getWorkImage('otonav/map-tracking.PNG')],
    detailImages: [
      getWorkImage('otonav/landing-hero.png'),
      getWorkImage('otonav/vendor-home.png'),
      getWorkImage('otonav/admin-analytics.png'),
      getWorkImage('otonav/map-tracking.PNG'),
      getWorkImage('otonav/rider-home.PNG'),
      getWorkImage('otonav/vendor-order-mgmt.png'),
    ],
    showcase: {
      desktop: getWorkImage('otonav/landing-hero.png'),
      phones: [
        getWorkImage('otonav/rider-home.PNG'),
        getWorkImage('otonav/map-tracking.PNG'),
        getWorkImage('otonav/user-home.PNG'),
      ],
    },
    tasks: ['Role-based product flows', 'Tracking and map screens', 'Vendor order management', 'Admin analytics'],
  },
  {
    title: 'Awa Own Commerce',
    subtitle:
      'A responsive ecommerce website for shopping, affiliate messaging, and brand storytelling.',
    productDetails: 'Ecommerce and Affiliate Landing Website',
    summary:
      'Awa Own is a web commerce experience that combines shopping, affiliate positioning, and brand storytelling. The site introduces the product route clearly while giving the brand room to explain its model and build trust.',
    challenge:
      'The landing page needed to feel simple and conversion-friendly while still explaining the shopping and affiliate journey. The layout had to move from hero messaging into product value without feeling like a generic ecommerce template.',
    conclusion:
      'The result is a clean, responsive web journey that supports product discovery, affiliate messaging, and brand credibility.',
    service: 'Website design & development',
    duration: '4 weeks',
    tools: 'React, CSS, Figma',
    client: 'Awa Own',
    websiteUrl: 'https://awaown.com/',
    previewType: 'web',
    webAccent: '#0b2842',
    frameColor: '#ffffff',
    previewBg: '#fff0e6',
    images: [getWorkImage('awa-own/landing-hero.png'), getWorkImage('awa-own/landing-shop.png')],
    detailImages: [
      getWorkImage('awa-own/landing-hero.png'),
      getWorkImage('awa-own/landing-shop.png'),
      getWorkImage('awa-own/landing-affiliate.png'),
      getWorkImage('awa-own/landing-about.png'),
    ],
    showcase: {
      desktop: getWorkImage('awa-own/landing-hero.png'),
      conclusionDesktop: getWorkImage('awa-own/landing-about.png'),
      webScreens: [getWorkImage('awa-own/landing-shop.png')],
    },
    tasks: ['Landing page composition', 'Commerce sections', 'Affiliate messaging', 'Responsive web design'],
  },
  {
    title: 'Sharp Drop Digital Services',
    subtitle:
      'A mobile digital-services product for peer-to-peer service requests, payments, and fast utility access.',
    productDetails: 'P2P Digital Services Mobile App',
    summary:
      'Sharp Drop is a mobile-first digital services platform built around quick access to everyday digital transactions. The product brings service selection, request flow, and payment touchpoints into a compact app experience.',
    challenge:
      'Digital-service apps need to feel immediate while still protecting users from confusing payment and request states. The challenge was shaping a practical app flow that can support repeat use without making the interface feel crowded.',
    conclusion:
      'Sharp Drop gives users a direct, store-published mobile channel for accessing digital services through a focused P2P workflow.',
    service: 'Mobile app development',
    duration: 'Public release',
    tools: 'Flutter, Dart, Mobile Payments',
    client: 'Sharp Drop',
    githubUrl: 'https://github.com/styceplug/p2p_sharpdrop',
    appleUrl: 'https://apps.apple.com/ng/app/sharp-drop-digital-services/id6746059389',
    playUrl:
      'https://play.google.com/store/apps/details?id=com.project.p2psharpdrop.p2p_sharpdrop&hl=en',
    previewType: 'web',
    frameColor: '#ffffff',
    previewBg: '#eef7ff',
    webAccent: '#2b78ff',
    detailImages: [],
    images: [],
    tasks: [
      'Built mobile flows for digital-service access and request handling.',
      'Prepared the app for both Apple App Store and Google Play distribution.',
      'Structured the experience around fast repeat actions and clear service selection.',
      'Connected the public app release with the source project entry.',
    ],
  },
  {
    title: 'Sudoku Pro',
    subtitle: 'A published puzzle game experience for mobile players who want clean Sudoku play sessions.',
    productDetails: 'Mobile Sudoku Puzzle Game',
    summary:
      'Sudoku Pro is a mobile puzzle app focused on straightforward Sudoku gameplay, clean session flow, and store-ready delivery. It extends the portfolio with a consumer-facing game product.',
    challenge:
      'Puzzle apps depend on clarity: the board, controls, feedback, and progression all need to stay readable for long sessions. The challenge was keeping the game interface simple while supporting a polished mobile release.',
    conclusion:
      'Sudoku Pro shows the ability to ship a focused mobile game product from implementation through public Play Store release.',
    service: 'Mobile game development',
    duration: 'Public release',
    tools: 'Flutter, Dart, Game Logic',
    client: 'Personal / Public GitHub',
    githubUrl: 'https://github.com/styceplug/Sudoku-Pro',
    playUrl: 'https://play.google.com/store/apps/details?id=com.project.sudokupro.sudokupro',
    frameColor: '#ffffff',
    previewBg: '#f3f6ff',
    webAccent: '#455cff',
    detailImages: [
      getWorkImage('sudoku/sudoku-banner.jpg'),
      getWorkImage('sudoku/home.png'),
      getWorkImage('sudoku/game-play.png'),
      getWorkImage('sudoku/progress.png'),
    ],
    images: [getWorkImage('sudoku/home.png'), getWorkImage('sudoku/game-play.png')],
    showcase: {
      desktop: getWorkImage('sudoku/sudoku-banner.jpg'),
      phones: [
        getWorkImage('sudoku/home.png'),
        getWorkImage('sudoku/game-play.png'),
        getWorkImage('sudoku/progress.png'),
      ],
    },
    tasks: [
      'Built the mobile puzzle app experience and game flow.',
      'Structured the project for a public Android release.',
      'Kept the interface focused on legibility and repeat play.',
      'Published the product through the Google Play Store.',
    ],
  },
  {
    title: 'IoT Alarm System',
    subtitle:
      'An IoT alarm project exploring connected device logic, alert states, and practical embedded-system workflows.',
    productDetails: 'Connected Alarm and IoT Prototype',
    summary:
      'IoT Alarm is a public engineering project centered on alarm behavior, connected-device thinking, and practical system logic. It adds hardware-aware problem solving to the wider product portfolio.',
    challenge:
      'IoT systems need dependable state handling because alerts, triggers, and device responses must be clear and predictable. The work required thinking beyond screens into event-driven behavior and system feedback.',
    conclusion:
      'The project demonstrates Oluwaferanmi’s range beyond standard UI work, connecting software thinking with practical IoT system behavior.',
    service: 'IoT prototype engineering',
    duration: 'Public build',
    tools: 'IoT, Embedded Logic, System Design',
    client: 'Personal / Public GitHub',
    githubUrl: 'https://github.com/styceplug/IOT-Alarm',
    previewType: 'web',
    previewBg: '#fff6e8',
    frameColor: '#ffffff',
    webAccent: '#f28b2e',
    detailImages: [],
    images: [],
    tasks: [
      'Explored connected alarm behavior and trigger handling.',
      'Structured a public IoT project around practical system states.',
      'Documented an engineering build outside the normal app-only portfolio lane.',
      'Connected the case entry to the public GitHub repository.',
    ],
  },
  {
    title: 'Pick App',
    subtitle:
      'A mobile app project focused on simple selection flows, user choices, and lightweight interaction design.',
    productDetails: 'Mobile Utility App Prototype',
    summary:
      'Pick App is a public mobile project that explores selection-led interactions. It is a smaller build, but it shows the repeated product habit of turning one clear user action into a direct mobile experience.',
    challenge:
      'Small utility apps can become confusing when the primary action is not obvious. The challenge was keeping the product narrow, simple, and easy to understand.',
    conclusion:
      'Pick App rounds out the portfolio as a compact mobile utility build connected to public source code.',
    service: 'Mobile app development',
    duration: 'Public build',
    tools: 'Flutter, Dart, Mobile UI',
    client: 'Personal / Public GitHub',
    githubUrl: 'https://github.com/styceplug/Pick_App',
    previewType: 'web',
    frameColor: '#ffffff',
    previewBg: '#edf9f4',
    webAccent: '#23a878',
    detailImages: [],
    images: [],
    tasks: [
      'Built a focused mobile utility experience.',
      'Kept interaction flow centered around simple user choices.',
      'Added the public GitHub build to the portfolio catalogue.',
      'Prepared the case for future screenshots and release links.',
    ],
  },
  {
    title: 'Balance Checker Fintech',
    subtitle: 'A focused one-page fintech interface for balance checking and account feedback.',
    productDetails: 'One-Page Fintech Web Experience',
    summary:
      'The one-page balance checker is a compact HTML web project focused on a simple fintech interaction. It rounds out the portfolio with a smaller web build beside the larger mobile products.',
    challenge:
      'Small fintech pages still need clear hierarchy, direct user feedback, and a focused interaction model without adding unnecessary interface weight.',
    conclusion:
      'The project is now represented as a concise web case study and linked to the public GitHub repository.',
    service: 'One-page web build',
    duration: 'Public build',
    tools: 'HTML',
    client: 'Personal / Public GitHub',
    githubUrl: 'https://github.com/styceplug/one-page-balance-checker-fintech',
    previewType: 'web',
    previewBg: '#eef3ff',
    frameColor: '#ffffff',
    webAccent: '#4f7cff',
    tasks: [
      'Built a focused one-page fintech interface.',
      'Kept the experience centered on a clear balance-checking flow.',
      'Added the web project to the portfolio rotation.',
      'Linked the case entry to the public repository.',
    ],
    detailImages: [],
    images: [],
  },
]

const projectPriority = [
  'Fyndr Service Marketplace',
  'Awa Own Commerce',
  'Rheel Real Estate',
  'OtoNav Onboarding',
  'Social Media Manager Portfolio',
  'Sharp Drop Digital Services',
  'Sudoku Pro',
]

const projects = [...projectCatalog].sort((first, second) => {
  const firstRank = projectPriority.indexOf(first.title)
  const secondRank = projectPriority.indexOf(second.title)
  const normalizedFirstRank = firstRank === -1 ? projectPriority.length : firstRank
  const normalizedSecondRank = secondRank === -1 ? projectPriority.length : secondRank

  return normalizedFirstRank - normalizedSecondRank
})

function WebProjectPreview({ project, compact = false }) {
  const previewImage = project.images?.find(Boolean)

  return (
    <div
      className={`web-preview ${compact ? 'web-preview-compact' : ''}`}
      style={{ '--preview-bg': project.previewBg, '--web-accent': project.webAccent }}
      aria-hidden="true"
    >
      <div className="browser-frame">
        <div className="browser-toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`browser-body ${previewImage ? 'has-screenshot' : ''}`}>
          {previewImage ? (
            <img className="browser-screenshot" src={previewImage} alt="" />
          ) : (
            <>
              <div className="browser-copy">
                <strong>{project.title}</strong>
                <i>{project.tools}</i>
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

function ProjectLinks({ project }) {
  const links = [
    project.githubUrl && ['GitHub', project.githubUrl],
    project.behanceUrl && ['Behance', project.behanceUrl],
    project.appleUrl && ['Apple Store', project.appleUrl],
    project.playUrl && ['Play Store', project.playUrl],
    project.websiteUrl && ['Website', project.websiteUrl],
  ].filter(Boolean)

  if (links.length === 0) return null

  return (
    <div className="detail-actions">
      {links.map(([label, href]) => (
        <a href={href} key={label} target="_blank" rel="noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}

function SeoProjectArchive() {
  return (
    <section className="seo-project-archive" aria-label="Full project portfolio">
      <h2>Oluwaferanmi Olotu Project Portfolio</h2>
      {projects.map((project) => (
        <article key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.productDetails}</p>
          <p>{project.summary}</p>
          <p>{project.subtitle}</p>
        </article>
      ))}
    </section>
  )
}

function ProjectVisualShowcase({ project, images }) {
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

function ProjectImageGallery({ project, images }) {
  const phoneImages = project.showcase?.phones?.filter(Boolean) ?? []
  const galleryPhones = phoneImages.slice(0, 3)
  const webImages = [project.showcase?.desktop, ...(project.showcase?.webScreens ?? [])].filter(Boolean)
  const fallbackImages = images.slice(0, 2).filter(Boolean)

  if (galleryPhones.length > 0) {
    return (
      <section
        className={`detail-device-gallery detail-phone-gallery phone-count-${galleryPhones.length}`}
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
    <section className="detail-image-pair">
      {fallbackImages.map((image) => (
        <img src={image} alt="" key={image} />
      ))}
    </section>
  )
}

function ProjectConclusionVisual({ image, project }) {
  if (!image) return null

  return (
    <div
      className="detail-conclusion-browser"
      style={{ '--showcase-bg': project.previewBg ?? '#eef9ff' }}
    >
      <div>
        <span></span>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

function ProjectDetail({ project, moreProjects, onBack, onSelectProject }) {
  const detailImages = project.detailImages.filter(Boolean)
  const conclusionImage = project.showcase?.conclusionDesktop ?? project.showcase?.desktop
  const moreWork = moreProjects.filter((item) => item.title !== project.title).slice(0, 2)

  return (
    <main className="project-detail-page">
      <header className="detail-header">
        <button type="button" onClick={onBack}>
          ← All projects
        </button>
        <span></span>
      </header>

      <section className="detail-hero">
        <p>{project.title}</p>
        <strong>{project.productDetails}</strong>
        <h1>{project.summary}</h1>
        <dl>
          <div>
            <dt>Service</dt>
            <dd>{project.service}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
        </dl>
        <ProjectLinks project={project} />
      </section>

      <ProjectVisualShowcase project={project} images={detailImages} />

      <section className="detail-two-column">
        <article>
          <h2>Summary</h2>
          <p>{project.summary}</p>
        </article>
        <article>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </article>
      </section>

      <ProjectImageGallery project={project} images={detailImages} />

      <section className="detail-writeup">
        <h2>What I did</h2>
        <ol>
          {project.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </section>

      <section className="detail-conclusion">
        <h2>Conclusion</h2>
        <p>{project.conclusion}</p>
        <ProjectConclusionVisual image={conclusionImage} project={project} />
      </section>

      <section className="detail-more-work">
        <h2>More work</h2>
        <div className="detail-more-grid">
          {moreWork.map((item) => (
            <button type="button" key={item.title} onClick={() => onSelectProject(item)}>
              {item.previewType === 'web' ? (
                <WebProjectPreview project={item} compact />
              ) : (
                <span style={{ '--preview-bg': item.previewBg, '--phone-frame': item.frameColor }}>
                  {item.images.slice(0, 2).map((image, index) => (
                    <img
                      className={`work-shot ${index === 0 ? 'primary-shot' : 'secondary-shot'}`}
                      src={image}
                      alt=""
                      key={image}
                    />
                  ))}
                </span>
              )}
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="contact-page" id="contact">
        <div>
          <span>Say hello</span>
          <a href="mailto:styceplug@gmail.com">styceplug@gmail.com</a>
        </div>
      </section>
    </main>
  )
}

function AboutPage({ onNavigate }) {
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false)
  const [openJourneyYear, setOpenJourneyYear] = useState(careerTimeline[0].year)

  const handleAboutNavClick = (event, label, target) => {
    event.preventDefault()
    setAboutMenuOpen(false)
    onNavigate(label, target)
  }

  return (
    <main className="about-detail-page">
      <header className="about-detail-header">
        <button type="button" className="wordmark" onClick={() => onNavigate('Home', 'landing')}>
          Oluwaferanmi Olotu
        </button>
        <button
          type="button"
          className="about-menu-toggle"
          aria-label="Open navigation"
          aria-expanded={aboutMenuOpen}
          onClick={() => setAboutMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {aboutMenuOpen && (
        <div className="menu-overlay">
          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setAboutMenuOpen(false)}
          >
            x
          </button>
          <nav aria-label="Expanded navigation">
            {navItems.map(([label, target]) => (
              <a
                href={`#${target}`}
                key={target}
                className={label === 'About' ? 'active' : undefined}
                aria-current={label === 'About' ? 'page' : undefined}
                onClick={(event) => handleAboutNavClick(event, label, target)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <aside className="social-rail about-social-rail" aria-label="Social profiles">
        {socialLinks.map(([label, icon, href]) => (
          <a
            href={href === '#contact' ? '#about-contact' : href}
            key={label}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <img src={icon} alt="" />
          </a>
        ))}
      </aside>

      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-kicker">About me</p>
          <img src={heroImg} alt="Oluwaferanmi Olotu" />
          <div className="about-hero-copy">
            <h1>
              I am a senior software engineer and product designer building
              globally accessible digital products. I create scalable mobile
              apps, clean digital interfaces, and end-to-end solutions for
              startups, creators, and enterprises.
            </h1>
            <p>
              I move seamlessly from high-level product thinking to intricate
              interface details, and finally into robust, working code. Backed
              by a degree in Computer Engineering, my work leans heavily into
              Flutter, Dart, real-time mobile flows, mapping, and complete
              system architecture driven through Dream Software Studios.
            </p>
            <a href={resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="about-proof">
        <article className="about-review-card">
          <div className="rating" aria-label="Five star review">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p>
            &quot;Working with Oluwaferanmi was interesting. He went above and
            beyond what I was asking for and provided a thoughtful design
            direction for my mobile application.&quot;
          </p>
          <div className="reviewer">
            <img src={reviewPfp} alt="" />
            <div>
              <strong>Odera Muoma</strong>
              <span>CEO Rheel Tech</span>
            </div>
          </div>
        </article>

        <div className="about-proof-right">
          <h2>By The Numbers</h2>
          <div className="stats-grid" aria-label="Professional statistics">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <TrustedLogoMarquee />
        </div>
      </section>

      <section className="about-services">
        <h2 className="about-services-heading">Technical Arsenal</h2>
        {aboutServices.map((service) => (
          <article key={service.title}>
            <img className="about-service-icon" src={service.icon} alt="" aria-hidden="true" />
            <div>
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="about-timeline">
        <p className="about-statement">
          I love turning messy product ideas into calm interfaces, testable
          flows, and mobile apps that people can actually use and scale.
        </p>
        <h2 className="journey-heading">The Journey</h2>
        {careerTimeline.map((item) => (
          <article className={openJourneyYear === item.year ? 'is-open' : undefined} key={item.year}>
            <button
              type="button"
              aria-expanded={openJourneyYear === item.year}
              aria-controls={`journey-${item.year}`}
              onClick={() => setOpenJourneyYear(item.year)}
            >
              <strong>{item.year}</strong>
              <span>{item.role}</span>
            </button>
            <div className="journey-panel" id={`journey-${item.year}`} hidden={openJourneyYear !== item.year}>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
        <p className="about-statement">
          I care about the full path: from engineering fundamentals and product
          direction, to UI detail, code quality, and the last-mile polish that
          makes software feel truly considered.
        </p>
      </section>

      <AboutContactSection />
    </main>
  )
}

function BlogPage({ posts, onOpenPost, onNavigate }) {
  const [blogMenuOpen, setBlogMenuOpen] = useState(false)

  const handleBlogNavClick = (event, label, target) => {
    event.preventDefault()
    setBlogMenuOpen(false)
    onNavigate(label, target)
  }

  return (
    <main className="blog-detail-page">
      <header className="about-detail-header blog-detail-header">
        <button type="button" className="wordmark" onClick={() => onNavigate('Home', 'landing')}>
          Oluwaferanmi Olotu
        </button>
        <button
          type="button"
          className="about-menu-toggle"
          aria-label="Open navigation"
          aria-expanded={blogMenuOpen}
          onClick={() => setBlogMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {blogMenuOpen && (
        <div className="menu-overlay">
          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setBlogMenuOpen(false)}
          >
            x
          </button>
          <nav aria-label="Expanded navigation">
            {navItems.map(([label, target]) => (
              <a
                href={`#${target}`}
                key={target}
                className={label === 'Blog' ? 'active' : undefined}
                aria-current={label === 'Blog' ? 'page' : undefined}
                onClick={(event) => handleBlogNavClick(event, label, target)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <aside className="social-rail about-social-rail" aria-label="Social profiles">
        {socialLinks.map(([label, icon, href]) => (
          <a
            href={href === '#contact' ? '#blog-contact' : href}
            key={label}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <img src={icon} alt="" />
          </a>
        ))}
      </aside>

      <section className="blog-list-page">
        <h1>Blog</h1>
        <div className="blog-list">
          {posts.map((post) => (
            <article className="blog-list-card" key={post.title}>
              <img src={post.image} alt="" />
              <div>
                <span>{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                {post.sourceUrl && (
                  <a className="blog-source-link" href={post.sourceUrl} target="_blank" rel="noreferrer">
                    Source: {post.sourceLabel}
                  </a>
                )}
                <button type="button" onClick={() => onOpenPost(post)}>
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AboutContactSection id="blog-contact" />
    </main>
  )
}

function BlogPostPage({ post, onBack, onNavigate }) {
  const [blogMenuOpen, setBlogMenuOpen] = useState(false)

  const handleBlogNavClick = (event, label, target) => {
    event.preventDefault()
    setBlogMenuOpen(false)
    onNavigate(label, target)
  }

  return (
    <main className="blog-detail-page">
      <header className="about-detail-header blog-detail-header">
        <button type="button" className="wordmark" onClick={() => onNavigate('Home', 'landing')}>
          Oluwaferanmi Olotu
        </button>
        <button
          type="button"
          className="about-menu-toggle"
          aria-label="Open navigation"
          aria-expanded={blogMenuOpen}
          onClick={() => setBlogMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {blogMenuOpen && (
        <div className="menu-overlay">
          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setBlogMenuOpen(false)}
          >
            x
          </button>
          <nav aria-label="Expanded navigation">
            {navItems.map(([label, target]) => (
              <a
                href={`#${target}`}
                key={target}
                className={label === 'Blog' ? 'active' : undefined}
                aria-current={label === 'Blog' ? 'page' : undefined}
                onClick={(event) => handleBlogNavClick(event, label, target)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <aside className="social-rail about-social-rail" aria-label="Social profiles">
        {socialLinks.map(([label, icon, href]) => (
          <a
            href={href === '#contact' ? '#blog-contact' : href}
            key={label}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <img src={icon} alt="" />
          </a>
        ))}
      </aside>

      <article className="blog-post-page">
        <button type="button" onClick={onBack}>
          ← Back to blog
        </button>
        <span>{post.category}</span>
        <h1>{post.title}</h1>
        <img src={post.image} alt="" />
        <p className="blog-post-intro">{post.intro}</p>
        {post.sourceUrl && (
          <a className="blog-source-link blog-post-source" href={post.sourceUrl} target="_blank" rel="noreferrer">
            Reference: {post.sourceLabel}
          </a>
        )}
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>

      <AboutContactSection id="blog-contact" />
    </main>
  )
}

function AboutContactSection({ id = 'about-contact' }) {
  return (
    <section className="about-contact-card" id={id}>
      <div className="about-email-card">
        <span>Email me at</span>
        <a href="mailto:styceplug@gmail.com">styceplug@gmail.com</a>
      </div>
      <div className="about-linkedin-card">
        <p>Would like to learn about my journey as a designer?</p>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>Because resumes are old fashioned now</span>
        <strong>in</strong>
      </div>
    </section>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [workStart, setWorkStart] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedBlogPost, setSelectedBlogPost] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')
  const visibleProjects = projects.slice(workStart, workStart + 3)
  const hasMoreProjects = workStart + 3 < projects.length

  const showNextProjects = () => {
    if (hasMoreProjects) {
      setWorkStart((currentStart) => currentStart + 3)
    } else {
      setWorkStart(0)
    }
  }

  const openProject = (project) => {
    setSelectedProject(project)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openBlogPost = (post) => {
    setSelectedBlogPost(post)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (target) => {
    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  const handleNavClick = (event, label) => {
    if (label === 'About') {
      event.preventDefault()
      setCurrentPage('about')
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (label === 'Blog') {
      event.preventDefault()
      setCurrentPage('blog')
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (label === 'Home') {
      setCurrentPage('home')
      setMenuOpen(false)
      return
    }

    setCurrentPage('home')
    setMenuOpen(false)
  }

  const handlePageNavigation = (label, target) => {
    setSelectedBlogPost(null)

    if (label === 'About') {
      setCurrentPage('about')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (label === 'Blog') {
      setCurrentPage('blog')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setCurrentPage('home')

    if (label === 'Home') {
      window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
      return
    }

    scrollToSection(target)
  }

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        moreProjects={projects}
        onBack={() => setSelectedProject(null)}
        onSelectProject={openProject}
      />
    )
  }

  if (selectedBlogPost) {
    return (
      <BlogPostPage
        post={selectedBlogPost}
        onBack={() => setSelectedBlogPost(null)}
        onNavigate={handlePageNavigation}
      />
    )
  }

  if (currentPage === 'about') {
    return <AboutPage onNavigate={handlePageNavigation} />
  }

  if (currentPage === 'blog') {
    return <BlogPage posts={blogPosts} onOpenPost={openBlogPost} onNavigate={handlePageNavigation} />
  }

  return (
    <main>
      <header className="site-header">
        <a href="#landing" className="wordmark" aria-label="Oluwaferanmi Olotu home">
          Oluwaferanmi
        </a>

        <nav aria-label="Primary navigation">
          {navItems.map(([label, target]) => (
            <a href={`#${target}`} key={target} onClick={(event) => handleNavClick(event, label)}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {menuOpen && (
        <div className="menu-overlay">
          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            x
          </button>
          <nav aria-label="Expanded navigation">
            {navItems.map(([label, target]) => (
              <a
                href={`#${target}`}
                key={target}
                className={label === 'Home' ? 'active' : undefined}
                aria-current={label === 'Home' ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, label)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <aside className="social-rail" aria-label="Social profiles">
        {socialLinks.map(([label, icon, href]) => (
          <a
            href={href}
            key={label}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <img src={icon} alt="" />
          </a>
        ))}
      </aside>

      <section className="landing-page" id="landing">
        <div className="hero-copy">
          <h1>
            Oluwaferanmi Olotu,
            <span>Freelancer,</span>
            <mark>Software developer</mark>
          </h1>
          <p>
            Hello, I am a product designer and software developer working with
            teams across borders. I design and build scalable mobile apps,
            dashboards, and responsive interfaces for startups and ambitious
            teams.
          </p>
          <a className="text-action" href="#project-description">
            Scroll down
          </a>
        </div>

        <div className="hero-image-wrap" aria-label="Oluwaferanmi portrait">
          <div className="hero-cyan-block"></div>
          <div className="hero-dots"></div>
          <img src={heroImg} alt="Oluwaferanmi Olotu" />
        </div>
      </section>

      <section className="about-page" id="about">
        <article className="review-card">
          <div className="section-label">
            <span></span>
            <small>ABOUT</small>
          </div>
          <div className="rating" aria-label="Five star review">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p>
            Working with Oluwaferanmi was interesting. He went above and beyond
            what I was asking for and provided a thoughtful design direction for
            my mobile application.
          </p>
          <div className="reviewer">
            <img src={reviewPfp} alt="" />
            <div>
              <strong>Odera Muoma</strong>
              <span>CEO Rheel Tech</span>
            </div>
          </div>
        </article>

        <div className="trust-panel">
          <h2>Trusted by the fastest growing digital startups</h2>
          <div className="stats-grid" aria-label="Professional statistics">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <TrustedLogoMarquee />
        </div>
      </section>

      <section className="project-description-page" id="project-description">
        <div className="section-label">
          <span></span>
          <small>WORK</small>
        </div>
        <h2>Bringing stellar results for every client.</h2>
        <div className="project-preview-grid">
          {visibleProjects.map((project) => (
            <article
              className="landing-project-card"
              key={project.title}
              style={{ '--preview-bg': project.previewBg, '--phone-frame': project.frameColor }}
            >
              <button type="button" onClick={() => openProject(project)} aria-label={`View ${project.title} case study`}>
                {project.previewType === 'web' ? (
                  <WebProjectPreview project={project} />
                ) : (
                  <div className="phone-preview">
                    {project.images.slice(0, 2).map((image, index) => (
                      <img
                        className={`work-shot ${index === 0 ? 'primary-shot' : 'secondary-shot'}`}
                        src={image}
                        alt=""
                        key={image}
                      />
                    ))}
                  </div>
                )}
              </button>
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </article>
          ))}
        </div>
        <button className="outline-action" type="button" onClick={showNextProjects}>
          {hasMoreProjects ? 'View next 3' : 'Start over'}
        </button>
      </section>

      <SeoProjectArchive />

      <section className="dark-feature-section" aria-label="Highlights">
        <div className="feature-grid">
          <article className="feature-card feature-prioritize">
            <img className="prioritize-img" src={prioritizeCard} alt="" />
            <img className="left-chat" src={leftChat} alt="" />
            <img className="right-chat" src={rightChat} alt="" />
            <h3>I prioritize client collaboration, fostering open communication</h3>
          </article>

          <article className="feature-card feature-zone">
            <img src={zoneBg} alt="" />
            <h3>I&apos;m very flexible with time-zone communications</h3>
            <span className="zone-pill usa">USA</span>
            <span className="zone-pill germany">Germany</span>
            <span className="zone-pill russia">Russia</span>
          </article>

          <article className="feature-card feature-passion">
            <h3>Tech enthusiast with a passion for development.</h3>
            <img src={passionGlass} alt="" />
          </article>

          <article className="feature-card feature-stack">
            <p>I constantly try to improve</p>
            <h3>My tech stack</h3>
            <div className="stack-list" aria-label="Tech stack">
              <div className="stack-track">
                {[...techStack, ...techStack].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="feature-card feature-cta">
            <h3>Do you want to start a project together?</h3>
            <button type="button">
              <img src={copyIcon} alt="" />
              Copy my email address
            </button>
          </article>

          <article className="feature-card feature-scoop">
            <img className="scoop-bg" src={scoopBg} alt="" />
            <img className="ide-snap" src={ideSnap} alt="" />
            <p>The inside scoop</p>
            <h3>Currently building mobile products with real-time interactions</h3>
          </article>
        </div>
      </section>

      <section className="blog-page" id="blog">
        <h2>Blog</h2>
        <p>
          Notes on product design, Flutter engineering, web interfaces, and the
          process behind building real software for startups.
        </p>
        <button className="outline-action" type="button" onClick={() => setCurrentPage('blog')}>
          Read the blog
        </button>
      </section>

      <section className="contact-page" id="contact">
        <div>
          <span>Say hello</span>
          <a href="mailto:styceplug@gmail.com">styceplug@gmail.com</a>
        </div>
      </section>
    </main>
  )
}

export default App
