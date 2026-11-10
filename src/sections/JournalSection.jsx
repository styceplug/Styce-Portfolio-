import { Link } from '../router/Router.jsx'
import Section from '../components/Section.jsx'
import { formatPostDate, posts } from '../data/posts.js'

export default function JournalSection() {
  return (
    <Section
      id="journal"
      className="journal-section"
      label="BLOG"
      title="Notes from the build process"
      lead="Product design, Flutter engineering, web interfaces, and the process behind building real software for startups."
      actions={
        <Link className="outline-action" to="/blog">
          Read the blog
        </Link>
      }
    >
      <div className="journal-grid">
        {posts.slice(0, 3).map((post) => (
          <article className="journal-card" key={post.slug}>
            <Link to={post.path} className="journal-card-media" tabIndex={-1} aria-hidden="true">
              <img src={post.image} alt="" loading="lazy" />
            </Link>
            <span className="journal-card-meta">
              {post.category} · {formatPostDate(post.date)}
            </span>
            <h3>
              <Link to={post.path}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
