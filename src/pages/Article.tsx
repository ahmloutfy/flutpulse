import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import MarkdownRenderer from '../components/MarkdownRenderer'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="article-layout-wrapper">
        <h1>Article not found</h1>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    )
  }

  const firstCategory = post.categories[0]
  const related = firstCategory
    ? posts.filter(p => p.slug !== post.slug && p.categories.includes(firstCategory)).slice(0, 3)
    : []
  const fallbackRelated = related.length < 3
    ? posts.filter(p => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length)
    : []
  const allRelated = [...related, ...fallbackRelated]

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="article-layout-wrapper">
      {post.image && (
        <div className="article-image-box">
          <img className="article-central-img" src={post.image} alt={post.title} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="article-main-content">
        <MarkdownRenderer body={post.body} title={post.title} formattedDate={formattedDate} />
      </div>

      {allRelated.length > 0 && (
        <section className="related-articles">
          <h2>Related Articles</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {allRelated.map(r => (
              <a key={r.slug} href={`#/articles/${r.slug}`} className="related-link" data-track-cta="related_article" data-track-location="article_footer">
                {r.title}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="newsletter-box">
        <h2>Want more practical Flutter fixes?</h2>
        <p>Subscribe by email and get concise, real-world Flutter tips.</p>
        <a href="mailto:flutpulse@proton.me?subject=FlutPulse%20Newsletter%20Subscription" className="btn btn-primary" data-track-cta="newsletter_signup" data-track-location="article_footer">Get Weekly Flutter Tips</a>
      </section>
    </div>
  )
}
