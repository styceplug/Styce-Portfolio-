import { RouterProvider } from './router/Router.jsx'
import { useRoute } from './router/context.js'
import SiteLayout from './layout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { getProjectBySlug } from './data/projects.js'
import { getPostBySlug } from './data/posts.js'
import { getPageMeta } from './seo/pageMeta.js'
import { useDocumentMeta } from './seo/useDocumentMeta.js'
import './styles/index.css'

function CurrentPage() {
  const route = useRoute()

  switch (route.name) {
    case 'home':
      return <HomePage />
    case 'about':
      return <AboutPage />
    case 'work':
      return <WorkPage />
    case 'project': {
      const project = getProjectBySlug(route.params.slug)
      return project ? <ProjectPage project={project} /> : <NotFoundPage />
    }
    case 'blog':
      return <BlogPage />
    case 'post': {
      const post = getPostBySlug(route.params.slug)
      return post ? <BlogPostPage post={post} /> : <NotFoundPage />
    }
    case 'contact':
      return <ContactPage />
    default:
      return <NotFoundPage />
  }
}

function Shell() {
  const route = useRoute()
  useDocumentMeta(getPageMeta(route))

  return (
    <SiteLayout tone={route.name === 'home' ? 'light' : 'dark'}>
      <CurrentPage />
    </SiteLayout>
  )
}

export default function App({ url = '/' }) {
  return (
    <RouterProvider url={url}>
      <Shell />
    </RouterProvider>
  )
}
