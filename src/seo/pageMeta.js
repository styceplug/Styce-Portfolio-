import { owner, siteUrl } from '../data/site.js'
import { getProjectBySlug, projects } from '../data/projects.js'
import { getPostBySlug, posts } from '../data/posts.js'

const defaultImage = `${siteUrl}/hero.jpg`

const person = {
  '@type': 'Person',
  name: owner.name,
  url: `${siteUrl}/`,
}

const breadcrumb = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(({ name, path }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    item: `${siteUrl}${path === '/' ? '/' : path}`,
  })),
})

const homeMeta = {
  path: '/',
  title: `${owner.name} | ${owner.role}`,
  description:
    'Oluwaferanmi Olotu is a Product Designer, senior software and mobile app developer, and lead at Dream Software Studios in Nigeria, building worldwide digital products, Flutter apps, responsive web platforms, and global software solutions.',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Oluwaferanmi Olotu Project Portfolio',
      itemListElement: projects.slice(0, 6).map((project, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: project.title,
        description: project.subtitle,
        url: `${siteUrl}${project.path}`,
        creator: person,
      })),
    },
  ],
}

const staticMeta = {
  about: {
    path: '/about',
    title: `About ${owner.name} | Product Designer & Software Engineer`,
    description:
      'The background, technical arsenal, and year-by-year journey of Oluwaferanmi Olotu: Flutter and Dart mobile engineering, product design, and end-to-end systems work through Dream Software Studios.',
    jsonLd: [breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])],
  },
  work: {
    path: '/work',
    title: `Work & Case Studies | ${owner.name}`,
    description:
      'Selected mobile apps, web platforms, marketplaces, logistics tools, and published products designed and engineered by Oluwaferanmi Olotu.',
    jsonLd: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Work', path: '/work' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Work & Case Studies',
        url: `${siteUrl}/work`,
        hasPart: projects.map((project) => ({
          '@type': 'CreativeWork',
          name: project.title,
          description: project.subtitle,
          url: `${siteUrl}${project.path}`,
        })),
      },
    ],
  },
  blog: {
    path: '/blog',
    title: `Blog | ${owner.name}`,
    description:
      'Notes on product design, Flutter engineering, web interfaces, and the process behind building real software for startups.',
    jsonLd: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${owner.name} Blog`,
        url: `${siteUrl}/blog`,
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          datePublished: post.date,
          url: `${siteUrl}${post.path}`,
          author: person,
        })),
      },
    ],
  },
  contact: {
    path: '/contact',
    title: `Contact ${owner.name} | Start a Project`,
    description:
      'Start a project with Oluwaferanmi Olotu. Email, LinkedIn, WhatsApp, and social channels for mobile app development, product design, and web platform work.',
    jsonLd: [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])],
  },
  'not-found': {
    path: '/404',
    title: `Page not found | ${owner.name}`,
    description: 'The page you were looking for is not available.',
    robots: 'noindex, follow',
  },
}

const absoluteAsset = (assetUrl) =>
  assetUrl && assetUrl.startsWith('/') ? `${siteUrl}${assetUrl}` : undefined

function projectMeta(project) {
  return {
    path: project.path,
    title: `${project.title} | ${project.productDetails}`,
    description: project.subtitle,
    image: absoluteAsset(project.images[0]) ?? defaultImage,
    jsonLd: [
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: project.title, path: project.path },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        headline: project.productDetails,
        description: project.summary,
        url: `${siteUrl}${project.path}`,
        creator: person,
        about: project.category,
        keywords: project.tools,
      },
    ],
  }
}

function postMeta(post) {
  return {
    path: post.path,
    title: `${post.title} | ${owner.name}`,
    description: post.excerpt,
    image: absoluteAsset(post.image) ?? defaultImage,
    jsonLd: [
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: post.path },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        articleSection: post.category,
        url: `${siteUrl}${post.path}`,
        author: person,
        publisher: person,
      },
    ],
  }
}

/** Single source of truth for head tags, used by the app and the prerenderer. */
export function getPageMeta(route) {
  if (route.name === 'home') return withDefaults(homeMeta)

  if (route.name === 'project') {
    const project = getProjectBySlug(route.params.slug)
    return withDefaults(project ? projectMeta(project) : staticMeta['not-found'])
  }

  if (route.name === 'post') {
    const post = getPostBySlug(route.params.slug)
    return withDefaults(post ? postMeta(post) : staticMeta['not-found'])
  }

  return withDefaults(staticMeta[route.name] ?? staticMeta['not-found'])
}

function withDefaults(meta) {
  return {
    image: defaultImage,
    robots: 'index, follow',
    ...meta,
    canonical: `${siteUrl}${meta.path === '/' ? '/' : meta.path}`,
    jsonLd: meta.jsonLd ?? [],
  }
}

/** Every URL the build should emit as static HTML. */
export const staticPaths = [
  '/',
  '/about',
  '/work',
  '/blog',
  '/contact',
  ...projects.map((project) => project.path),
  ...posts.map((post) => post.path),
]
