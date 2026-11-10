import { getWorkImage } from './workImages.js'
import { slugify } from './projects.js'

const postCatalog = [
  {
    title: 'AI Is Making Product UX More Ambient',
    category: 'Product thinking',
    date: '2026-01-18',
    readingTime: '4 min read',
    image: getWorkImage('fyndr/landing-hero.webp'),
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
    date: '2025-12-02',
    readingTime: '4 min read',
    image: getWorkImage('rheel/landing-about.webp'),
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
    date: '2025-10-21',
    readingTime: '4 min read',
    image: getWorkImage('otonav/landing-hero.webp'),
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

export const posts = postCatalog.map((post) => ({
  ...post,
  slug: post.slug ?? slugify(post.title),
  path: `/blog/${post.slug ?? slugify(post.title)}`,
}))

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug)

export const getRelatedPosts = (post, count = 2) =>
  posts.filter((item) => item.slug !== post.slug).slice(0, count)

export const formatPostDate = (value) =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
