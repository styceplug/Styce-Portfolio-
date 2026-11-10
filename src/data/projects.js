import { getWorkImage } from './workImages.js'

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const projectCatalog = [
  {
    title: 'Social Media Manager Portfolio',
    category: 'Web',
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
    images: [getWorkImage('shubby/homepage.webp'), getWorkImage('shubby/work-section.webp')],
    detailImages: [getWorkImage('shubby/homepage.webp'), getWorkImage('shubby/work-section.webp')],
    showcase: {
      desktop: getWorkImage('shubby/homepage.webp'),
      webScreens: [getWorkImage('shubby/work-section.webp')],
    },
  },
  {
    title: 'Hilite Talent Network',
    category: 'Mobile',
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
    images: [getWorkImage('hilite/discover.webp'), getWorkImage('hilite/reels.webp')],
    detailImages: [
      getWorkImage('hilite/discover.webp'),
      getWorkImage('hilite/messaging.webp'),
      getWorkImage('hilite/reels.webp'),
      getWorkImage('hilite/activities.webp'),
      getWorkImage('hilite/profile.webp'),
    ],
    showcase: {
      phones: [
        getWorkImage('hilite/discover.webp'),
        getWorkImage('hilite/reels.webp'),
        getWorkImage('hilite/profile.webp'),
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
    category: 'Web',
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
    category: 'Mobile',
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
    images: [getWorkImage('fyndr/user-home.webp'), getWorkImage('fyndr/declutter.webp')],
    detailImages: [
      getWorkImage('fyndr/landing-hero.webp'),
      getWorkImage('fyndr/user-home.webp'),
      getWorkImage('fyndr/vendor-home.webp'),
      getWorkImage('fyndr/jobs.webp'),
      getWorkImage('fyndr/declutter.webp'),
      getWorkImage('fyndr/switch-user-vendor.webp'),
    ],
    showcase: {
      desktop: getWorkImage('fyndr/landing-hero.webp'),
      phones: [
        getWorkImage('fyndr/user-home.webp'),
        getWorkImage('fyndr/vendor-home.webp'),
        getWorkImage('fyndr/jobs.webp'),
      ],
    },
    tasks: ['User and vendor flows', 'Service category structure', 'Job screens', 'Marketplace onboarding'],
  },
  {
    title: 'Smart Swatcher Studio',
    category: 'Mobile',
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
      getWorkImage('smart-swatcher/dashboard.webp'),
      getWorkImage('smart-swatcher/hair-formulator.webp'),
    ],
    detailImages: [
      getWorkImage('smart-swatcher/dashboard.webp'),
      getWorkImage('smart-swatcher/live-room.webp'),
      getWorkImage('smart-swatcher/hair-formulator.webp'),
      getWorkImage('smart-swatcher/feeds.webp'),
      getWorkImage('smart-swatcher/profile.webp'),
    ],
    showcase: {
      phones: [
        getWorkImage('smart-swatcher/dashboard.webp'),
        getWorkImage('smart-swatcher/hair-formulator.webp'),
        getWorkImage('smart-swatcher/live-room.webp'),
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
    category: 'Mobile',
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
    images: [getWorkImage('rheel/home.webp'), getWorkImage('rheel/property-detail.webp')],
    detailImages: [
      getWorkImage('rheel/landing-hero.webp'),
      getWorkImage('rheel/web-home.webp'),
      getWorkImage('rheel/home.webp'),
      getWorkImage('rheel/property-detail.webp'),
      getWorkImage('rheel/landing-about.webp'),
      getWorkImage('rheel/splash.webp'),
    ],
    showcase: {
      desktop: getWorkImage('rheel/landing-hero.webp'),
      conclusionDesktop: getWorkImage('rheel/landing-about.webp'),
      phones: [
        getWorkImage('rheel/home.webp'),
        getWorkImage('rheel/property-detail.webp'),
        getWorkImage('rheel/splash.webp'),
      ],
    },
    tasks: ['Listing discovery', 'Property detail UI', 'Landing page sections', 'Search and save flows'],
  },
  {
    title: 'Digi-02 Mobility',
    category: 'Mobile',
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
    images: [getWorkImage('digi-volt/home.webp'), getWorkImage('digi-volt/ride-booking.webp')],
    detailImages: [
      getWorkImage('digi-volt/home.webp'),
      getWorkImage('digi-volt/ride-booking.webp'),
      getWorkImage('digi-volt/profile.webp'),
    ],
    showcase: {
      phones: [
        getWorkImage('digi-volt/home.webp'),
        getWorkImage('digi-volt/ride-booking.webp'),
        getWorkImage('digi-volt/profile.webp'),
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
    category: 'Mobile',
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
    images: [getWorkImage('smart-wage/home.webp'), getWorkImage('smart-wage/attendance.webp')],
    detailImages: [
      getWorkImage('smart-wage/home.webp'),
      getWorkImage('smart-wage/attendance.webp'),
      getWorkImage('smart-wage/splash.webp'),
    ],
    showcase: {
      phones: [
        getWorkImage('smart-wage/home.webp'),
        getWorkImage('smart-wage/attendance.webp'),
        getWorkImage('smart-wage/splash.webp'),
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
    category: 'Mobile',
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
    images: [getWorkImage('otonav/user-home.webp'), getWorkImage('otonav/map-tracking.webp')],
    detailImages: [
      getWorkImage('otonav/landing-hero.webp'),
      getWorkImage('otonav/vendor-home.webp'),
      getWorkImage('otonav/admin-analytics.webp'),
      getWorkImage('otonav/map-tracking.webp'),
      getWorkImage('otonav/rider-home.webp'),
      getWorkImage('otonav/vendor-order-mgmt.webp'),
    ],
    showcase: {
      desktop: getWorkImage('otonav/landing-hero.webp'),
      phones: [
        getWorkImage('otonav/rider-home.webp'),
        getWorkImage('otonav/map-tracking.webp'),
        getWorkImage('otonav/user-home.webp'),
      ],
    },
    tasks: ['Role-based product flows', 'Tracking and map screens', 'Vendor order management', 'Admin analytics'],
  },
  {
    title: 'Awa Own Commerce',
    category: 'Web',
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
    images: [getWorkImage('awa-own/landing-hero.webp'), getWorkImage('awa-own/landing-shop.webp')],
    detailImages: [
      getWorkImage('awa-own/landing-hero.webp'),
      getWorkImage('awa-own/landing-shop.webp'),
      getWorkImage('awa-own/landing-affiliate.webp'),
      getWorkImage('awa-own/landing-about.webp'),
    ],
    showcase: {
      desktop: getWorkImage('awa-own/landing-hero.webp'),
      conclusionDesktop: getWorkImage('awa-own/landing-about.webp'),
      webScreens: [getWorkImage('awa-own/landing-shop.webp')],
    },
    tasks: ['Landing page composition', 'Commerce sections', 'Affiliate messaging', 'Responsive web design'],
  },
  {
    title: 'Sharp Drop Digital Services',
    category: 'Mobile',
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
    category: 'Game',
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
      getWorkImage('sudoku/sudoku-banner.webp'),
      getWorkImage('sudoku/home.webp'),
      getWorkImage('sudoku/game-play.webp'),
      getWorkImage('sudoku/progress.webp'),
    ],
    images: [getWorkImage('sudoku/home.webp'), getWorkImage('sudoku/game-play.webp')],
    showcase: {
      desktop: getWorkImage('sudoku/sudoku-banner.webp'),
      phones: [
        getWorkImage('sudoku/home.webp'),
        getWorkImage('sudoku/game-play.webp'),
        getWorkImage('sudoku/progress.webp'),
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
    category: 'Systems',
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
    category: 'Mobile',
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
    category: 'Web',
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
  {
    title: 'Seekly Booking Marketplace',
    category: 'Mobile',
    subtitle:
      'A two-sided booking marketplace in Ireland for beauty, fitness, events, and creative services — provider app, backend, admin, and website.',
    productDetails: 'Two-Sided Services Booking Platform (Ireland)',
    summary:
      'Seekly is a production booking marketplace that lets customers discover, book, and pay local service providers, while providers run their business from a dedicated app, Seekly Pro. I work across the platform: the Seekly Pro provider app, the Node.js backend, the admin dashboard, the infrastructure behind them, and the seekly.ie website.',
    challenge:
      'A two-sided marketplace has to get both journeys right at once. Providers need onboarding, verification, services, availability rules, and payouts that hold up in production, while customers need fast discovery, reliable booking, and payments they can trust. All of it had to keep running live while large parts of the platform were being rebuilt.',
    conclusion:
      'Seekly Pro is now live on the App Store and Google Play, backed by a hardened backend, a rebuilt admin dashboard, safer payments, and a production-ready release process.',
    service: 'Mobile, backend & web engineering',
    tools: 'Flutter, Dart, GetX, Node.js, Express, PostgreSQL, Stripe, AWS, React, Next.js',
    client: 'Seekly',
    websiteUrl: 'https://seekly.ie/',
    previewType: 'web',
    previewBg: '#eef0ff',
    frameColor: '#ffffff',
    webAccent: '#3b3fd8',
    tasks: [
      'Rebuilt the Seekly Pro provider onboarding: business profile, verification, services, coverage areas, availability, and Stripe Connect payouts.',
      'Reviewed and fixed the Stripe payment flow so commissions, charges, and payouts always reconcile.',
      'Extended search beyond names to categories, tags, synonyms, and descriptions, with in-studio and home-visit filters.',
      'Set up an isolated dev environment, CI/CD pipelines, and automated production backups.',
      'Rebuilt the admin dashboard and built the seekly.ie website from the Figma designs.',
      'Took Seekly Pro through signing and store submission to public release on iOS and Android.',
    ],
    images: [getWorkImage('seekly/hero.webp'), getWorkImage('seekly/section.webp')],
    detailImages: [getWorkImage('seekly/hero.webp'), getWorkImage('seekly/section.webp')],
    showcase: {
      desktop: getWorkImage('seekly/hero.webp'),
      webScreens: [getWorkImage('seekly/section.webp')],
    },
  },
  {
    title: 'SCALE Mobility Finance',
    category: 'Mobile',
    subtitle:
      'A mobility finance app giving drivers and fleet owners access to credit, banking, and vehicle services.',
    productDetails: 'Mobility Financing App for Drivers and Fleets',
    summary:
      'SCALE is an integrated mobility financing platform for drivers and fleet businesses. Through the app, drivers get capital for fuel, repairs, CNG conversions, and assets, alongside payment and savings tools and a partner network of mechanics and service providers.',
    challenge:
      'Financial products for drivers have to fit how drivers actually earn: irregular income, daily expenses, and little time to spend in an app. The mobile experience needed to make credit, repayments, and vehicle services feel simple and trustworthy for everyday use.',
    conclusion:
      'SCALE is live on the App Store and Google Play, giving drivers and fleet owners one mobile channel for financing, payments, and keeping their vehicles on the road.',
    service: 'Mobile engineering',
    tools: 'iOS & Android',
    client: 'Renda',
    appleUrl: 'https://apps.apple.com/ng/app/scale-empowering-mobility/id6743079294',
    playUrl: 'https://play.google.com/store/apps/details?id=com.newScale.app',
    websiteUrl: 'https://www.usescale.app/',
    previewType: 'web',
    previewBg: '#e9f7ef',
    frameColor: '#ffffff',
    webAccent: '#0f7a45',
    tasks: [
      'Worked as a mobile engineer on the SCALE app for iOS and Android.',
      'Built and maintained app flows for credit, payments, and driver services.',
      'Shipped updates to the published App Store and Google Play releases.',
    ],
    images: [getWorkImage('scale/hero.webp'), getWorkImage('scale/section.webp')],
    detailImages: [getWorkImage('scale/hero.webp'), getWorkImage('scale/section.webp')],
    showcase: {
      desktop: getWorkImage('scale/hero.webp'),
      webScreens: [getWorkImage('scale/section.webp')],
    },
  },
  {
    title: 'Your-UniVerse Student Platform',
    category: 'Web',
    subtitle:
      'A school and career companion for South African learners — marketing website, learner app, and tutor portal.',
    productDetails: 'EdTech Platform for Grade 9–12 Learners (South Africa)',
    summary:
      'Your-UniVerse helps South African learners from Grade 9 to Grade 12 plan their future: career guidance matched to their subjects and results, institution and bursary discovery, tutoring, mentorship, and AI-assisted advice, with parents kept in the loop. I built the public website with its waitlist, the learner app, and the tutor web portal.',
    challenge:
      'The product serves learners, parents, and tutors, each with different needs, and launches in stages. The website had to explain a broad offering clearly and capture early sign-ups, while the app and tutor portal were built against a backend that was still taking shape.',
    conclusion:
      'The live website gives Your-UniVerse a clear public face and a working waitlist, with the learner app and tutor portal built and ready for launch.',
    service: 'Web & mobile development',
    tools: 'Next.js, Tailwind CSS, Supabase, Cloudflare, Flutter, GetX',
    client: 'Lynxio Tech',
    websiteUrl: 'https://www.youruniversehub.com/',
    previewType: 'web',
    previewBg: '#f1ecff',
    frameColor: '#ffffff',
    webAccent: '#5b34d6',
    tasks: [
      'Built the marketing website in Next.js and Tailwind from the Figma design and deployed it on Cloudflare.',
      'Connected the waitlist and contact forms to Supabase.',
      'Built the learner sign-up and onboarding app in Flutter with GetX.',
      'Built a standalone tutor web portal in Next.js.',
    ],
    images: [getWorkImage('your-universe/hero.webp'), getWorkImage('your-universe/section.webp')],
    detailImages: [getWorkImage('your-universe/hero.webp'), getWorkImage('your-universe/section.webp')],
    showcase: {
      desktop: getWorkImage('your-universe/hero.webp'),
      webScreens: [getWorkImage('your-universe/section.webp')],
    },
  },
  {
    title: 'Hartregie Heart Screening',
    category: 'Web',
    subtitle:
      'A website for a Dutch preventive heart-health screening provider serving employers and individuals.',
    productDetails: 'Preventive Heart-Health Screening Website (Netherlands)',
    summary:
      'Hartregie offers preventive medical examinations focused on heart and vascular health, for employers who want to reduce sick leave and for individuals who want to understand their own risk. The Dutch-language site explains the screening, walks visitors through the four-step process, and turns interest into booked appointments.',
    challenge:
      'Preventive screening is a hard sell: people rarely act on risks they cannot feel. The site had to make heart-health statistics personal, speak to both HR teams and individuals, give women’s heart symptoms their own space, and keep booking one click away throughout.',
    conclusion:
      'The result is a calm, credible site that presents Hartregie’s collaboration with Maastricht UMC+, explains the process plainly, and puts online booking at every step.',
    service: 'Website design & development',
    tools: 'Prismic CMS, Responsive Web',
    client: 'Hartregie',
    websiteUrl: 'https://hartregie.nl/',
    previewType: 'web',
    previewBg: '#fdeeee',
    frameColor: '#ffffff',
    webAccent: '#c22a3a',
    tasks: [
      'Structured the site around the four-step screening process: intake, diagnostics, results, and reporting.',
      'Built dedicated sections for employers and for women’s heart health.',
      'Integrated online appointment booking, a contact form, and a downloadable brochure.',
      'Connected the content to Prismic so the team can update it themselves.',
    ],
    images: [getWorkImage('hartregie/hero.webp'), getWorkImage('hartregie/section.webp')],
    detailImages: [getWorkImage('hartregie/hero.webp'), getWorkImage('hartregie/section.webp')],
    showcase: {
      desktop: getWorkImage('hartregie/hero.webp'),
      webScreens: [getWorkImage('hartregie/section.webp')],
    },
  },
  {
    title: 'LASHMA Health Insurance',
    category: 'Web',
    subtitle:
      'The website of the Lagos State Health Management Agency and its ILERA EKO health insurance scheme.',
    productDetails: 'Government Health Insurance Website (Lagos, Nigeria)',
    summary:
      'The Lagos State Health Management Agency (LASHMA) runs ILERA EKO, the state health insurance scheme that brings quality, affordable healthcare to every Lagos resident. The website is the agency’s public home: what the scheme covers, how to enrol, and how to reach the agency.',
    challenge:
      'A public health agency speaks to a very wide audience, from first-time enrollees to healthcare providers. The site needed to explain health insurance in plain terms, make enrolment the obvious next step, and carry the credibility expected of a state agency.',
    conclusion:
      'The site gives LASHMA a modern, trustworthy web presence under its mandate, “Your Good Health, Our Mandate,” with a clear route into ILERA EKO.',
    service: 'Website design & development',
    tools: 'Responsive Web',
    client: 'Lagos State Health Management Agency',
    websiteUrl: 'https://www.lashma.com/',
    previewType: 'web',
    previewBg: '#e8f6ee',
    frameColor: '#ffffff',
    webAccent: '#1c7c4a',
    tasks: [
      'Designed and built the agency’s public website.',
      'Presented the ILERA EKO scheme and the enrolment journey clearly.',
      'Built responsive pages for residents on mobile and desktop.',
    ],
    images: [getWorkImage('lashma/hero.webp'), getWorkImage('lashma/section.webp')],
    detailImages: [getWorkImage('lashma/hero.webp'), getWorkImage('lashma/section.webp')],
    showcase: {
      desktop: getWorkImage('lashma/hero.webp'),
      webScreens: [getWorkImage('lashma/section.webp')],
    },
  },
  {
    title: 'Neuropelvic Surgery Practice',
    category: 'Web',
    subtitle:
      'A website for a US specialist practice in robotic, minimally invasive pelvic nerve surgery and surgical training.',
    productDetails: 'Specialist Surgical Practice Website (United States)',
    summary:
      'Neuropelvic Surgery is a specialist practice treating nerve-related pelvic, buttock, and low back pain with robotic and minimally invasive surgery, with offices in New Jersey and New York. Alongside patient care, it runs the first fellowship in minimally invasive and robotic neuropelvic surgery and a regular observership program.',
    challenge:
      'The site serves two very different audiences: patients with long-standing pain looking for answers, and physicians looking for advanced training. As project manager, I had to keep the practice, the clinical content, and the build team aligned so that complex nerve procedures were explained in plain language and the training programs got a clear, separate path.',
    conclusion:
      'The project launched on track: patients get procedure-by-procedure explanations and a direct route to book, and physicians get a dedicated home for the fellowship and observership programs.',
    service: 'Project management',
    tools: 'WordPress, Responsive Web',
    client: 'Women’s Pelvic Surgery, LLC',
    websiteUrl: 'https://neuropelvicsurgery.com/',
    previewType: 'web',
    previewBg: '#fff1e6',
    frameColor: '#ffffff',
    webAccent: '#d9601a',
    tasks: [
      'Managed the website project for the practice from scope to launch.',
      'Coordinated the practice and the build team on content, structure, and timelines.',
      'Steered the site structure: a page per nerve procedure, a surgery FAQ, and separate fellowship and observership sections.',
      'Oversaw the booking and contact routes for both office locations.',
    ],
    images: [getWorkImage('neuropelvic/hero.webp'), getWorkImage('neuropelvic/section.webp')],
    detailImages: [getWorkImage('neuropelvic/hero.webp'), getWorkImage('neuropelvic/section.webp')],
    showcase: {
      desktop: getWorkImage('neuropelvic/hero.webp'),
      webScreens: [getWorkImage('neuropelvic/section.webp')],
    },
  },
  {
    title: 'Spirit of Hopes Home Care',
    category: 'Web',
    subtitle:
      'A website for a family-owned in-home care and skilled nursing agency in Maryland, US.',
    productDetails: 'Home Care Agency Website (Maryland, US)',
    summary:
      'Spirit of Hopes is a family-owned agency providing RN-supervised in-home care across Anne Arundel, Baltimore, Howard, and Montgomery counties. The site presents its services, from personal and companion care to memory care and skilled nursing, and helps families take the first step.',
    challenge:
      'Families usually arrive at a home-care site worried and short on time. The site needed to build trust quickly, explain each service in plain language, and make it easy to reach a real person.',
    conclusion:
      'The site leads with reassurance and trust signals, then gives families three easy next steps: a free online assessment, a booked consultation, or a phone call.',
    service: 'Website design & development',
    tools: 'Wix',
    client: 'Spirit of Hope LLC',
    websiteUrl: 'https://www.spiritofhopes.com/',
    previewType: 'web',
    previewBg: '#e6f6f5',
    frameColor: '#ffffff',
    webAccent: '#1b8a85',
    tasks: [
      'Built service pages for personal care, memory care, skilled nursing, and hospital-exit support.',
      'Added a free online safety assessment and consultation booking.',
      'Set up a blog, guides, and a downloadable senior-health guide.',
      'Surfaced trust signals, testimonials, and Google reviews.',
    ],
    images: [getWorkImage('spirit-of-hopes/hero.webp'), getWorkImage('spirit-of-hopes/section.webp')],
    detailImages: [getWorkImage('spirit-of-hopes/hero.webp'), getWorkImage('spirit-of-hopes/section.webp')],
    showcase: {
      desktop: getWorkImage('spirit-of-hopes/hero.webp'),
      webScreens: [getWorkImage('spirit-of-hopes/section.webp')],
    },
  },
  {
    title: 'RheelTech Corporate Website',
    category: 'Web',
    subtitle:
      'The corporate website of Rheel Technology Limited, a Nigerian company building platforms that connect people, services, and businesses.',
    productDetails: 'Technology Company Website (Nigeria)',
    summary:
      'Rheel Technology Limited builds practical digital platforms connecting people, services, businesses, and opportunities across Nigeria and Africa. The corporate site introduces the company and its mission, “Building People Through Technology,” and gives its products a shared home, including the Rheel property app, Fyndr, and Awa Own.',
    challenge:
      'A company with several products needs a site that explains the bigger picture without burying any single product. It had to feel credible to partners and investors while staying approachable to everyday users.',
    conclusion:
      'The site gives RheelTech a clear corporate identity and a single place to present its platforms.',
    service: 'Website design & development',
    tools: 'Responsive Web',
    client: 'Rheel Technology Limited',
    websiteUrl: 'https://rheeltech.ng/',
    previewType: 'web',
    previewBg: '#e9eef6',
    frameColor: '#ffffff',
    webAccent: '#101b2d',
    tasks: [
      'Designed and built the corporate website.',
      'Presented the company mission and its platforms.',
      'Built responsive pages for mobile and desktop.',
    ],
    images: [getWorkImage('rheeltech/hero.webp'), getWorkImage('rheeltech/section.webp')],
    detailImages: [getWorkImage('rheeltech/hero.webp'), getWorkImage('rheeltech/section.webp')],
    showcase: {
      desktop: getWorkImage('rheeltech/hero.webp'),
      webScreens: [getWorkImage('rheeltech/section.webp')],
    },
  },
]

const projectPriority = [
  'Seekly Booking Marketplace',
  'Fyndr Service Marketplace',
  'SCALE Mobility Finance',
  'Awa Own Commerce',
  'Rheel Real Estate',
  'Your-UniVerse Student Platform',
  'Hartregie Heart Screening',
  'LASHMA Health Insurance',
  'OtoNav Onboarding',
  'Neuropelvic Surgery Practice',
  'Spirit of Hopes Home Care',
  'RheelTech Corporate Website',
  'Social Media Manager Portfolio',
  'Sharp Drop Digital Services',
  'Sudoku Pro',
]

const rankOf = (project) => {
  const rank = projectPriority.indexOf(project.title)
  return rank === -1 ? projectPriority.length : rank
}

export const projects = projectCatalog
  .map((project) => ({
    ...project,
    slug: project.slug ?? slugify(project.title),
    path: `/work/${project.slug ?? slugify(project.title)}`,
    images: (project.images ?? []).filter(Boolean),
    detailImages: (project.detailImages ?? []).filter(Boolean),
  }))
  .sort((first, second) => rankOf(first) - rankOf(second))

/** Home-page teasers: the top-ranked projects that have real screenshots. */
export const featuredProjects = projects.filter((project) => project.images.length > 0).slice(0, 3)

/** Work index groups: websites vs. apps (mobile, games, systems). */
export const projectSections = [
  { id: 'web', label: 'Web', title: 'Websites & web platforms' },
  { id: 'apps', label: 'Apps', title: 'Mobile apps & products' },
].map((section) => ({
  ...section,
  projects: projects.filter((project) =>
    section.id === 'web' ? project.category === 'Web' : project.category !== 'Web',
  ),
}))

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

export const getRelatedProjects = (project, count = 2) =>
  projects.filter((item) => item.slug !== project.slug).slice(0, count)

export const getProjectLinks = (project) =>
  [
    project.githubUrl && { label: 'GitHub', href: project.githubUrl },
    project.behanceUrl && { label: 'Behance', href: project.behanceUrl },
    project.appleUrl && { label: 'Apple Store', href: project.appleUrl },
    project.playUrl && { label: 'Play Store', href: project.playUrl },
    project.websiteUrl && { label: 'Website', href: project.websiteUrl },
  ].filter(Boolean)
