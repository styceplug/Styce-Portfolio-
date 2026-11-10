import { Link } from '../router/Router.jsx'
import ContactCards from '../sections/ContactCards.jsx'
import { formatPostDate, getRelatedPosts } from '../data/posts.js'

export default function BlogPostPage({ post }) {
  const relatedPosts = getRelatedPosts(post)

  return (
    <>
      <nav className="post-breadcrumb" aria-label="Breadcrumb">
        <Link to="/blog">← Back to blog</Link>
      </nav>

      <article className="blog-post-page">
        <span>{post.category}</span>
        <h1>{post.title}</h1>
        <p className="blog-post-byline">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingTime}
        </p>
        <img src={post.image} alt="" />
        <p className="blog-post-intro">{post.intro}</p>
        {post.sourceUrl && (
          <a
            className="blog-source-link blog-post-source"
            href={post.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
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

      {relatedPosts.length > 0 && (
        <section className="blog-related" id="more-posts" aria-labelledby="more-posts-title">
          <h2 id="more-posts-title">Keep reading</h2>
          <div className="journal-grid">
            {relatedPosts.map((item) => (
              <article className="journal-card" key={item.slug}>
                <Link to={item.path} className="journal-card-media" tabIndex={-1} aria-hidden="true">
                  <img src={item.image} alt="" loading="lazy" />
                </Link>
                <span className="journal-card-meta">
                  {item.category} · {formatPostDate(item.date)}
                </span>
                <h3>
                  <Link to={item.path}>{item.title}</Link>
                </h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <ContactCards />
    </>
  )
}
