import { Link } from '../router/Router.jsx'
import ContactCards from '../sections/ContactCards.jsx'
import { formatPostDate, posts } from '../data/posts.js'

export default function BlogPage() {
  return (
    <>
      <section className="page-hero" id="intro">
        <p className="page-kicker">Blog</p>
        <h1>Notes on design, engineering, and shipping products.</h1>
        <p className="page-lead">
          Short, practical write-ups on product design, Flutter engineering, web interfaces, and the
          process behind building real software for startups.
        </p>
      </section>

      <section className="blog-list-page" id="posts" aria-label="All posts">
        <div className="blog-list">
          {posts.map((post) => (
            <article className="blog-list-card" key={post.slug}>
              <Link to={post.path} className="blog-list-card-media" tabIndex={-1} aria-hidden="true">
                <img src={post.image} alt="" loading="lazy" />
              </Link>
              <div>
                <span>
                  {post.category} · {formatPostDate(post.date)} · {post.readingTime}
                </span>
                <h2>
                  <Link to={post.path}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                {post.sourceUrl && (
                  <a className="blog-source-link" href={post.sourceUrl} target="_blank" rel="noreferrer">
                    Source: {post.sourceLabel}
                  </a>
                )}
                <Link className="outline-action" to={post.path}>
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCards />
    </>
  )
}
