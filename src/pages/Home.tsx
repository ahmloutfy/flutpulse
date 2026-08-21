import { posts, categories } from '../data/posts'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Solve. Learn. <span>Build.</span></h1>
          <p>Fix Flutter issues with clear, practical solutions.</p>
          <a href="#/#latest-articles" className="btn btn-primary" data-track-cta="browse_articles" data-track-location="home_hero">Browse Articles</a>
          <a href="#/#categories-overview" className="btn btn-secondary" data-track-cta="explore_categories" data-track-location="home_hero">Explore Categories</a>
        </div>
        <div className="hero-logo">
          <img src="/flutpulse_logo.png" alt="FlutPulse" loading="eager" decoding="async" />
        </div>
      </section>

      <div id="latest-articles" className="container" style={{ textAlign: 'center' }}>
        <h2>Latest Articles</h2>
        <div className="grid">
          {posts.map(post => (
            <div className="card" key={post.slug}>
              {post.image && (
                <img src={post.image} className="card-img" alt={post.title} loading="lazy" decoding="async" />
              )}
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={`#/articles/${post.slug}`} className="btn btn-primary" data-track-cta="read_article" data-track-location="home_latest_articles">Read More</a>
            </div>
          ))}
        </div>
      </div>

      <div id="categories-overview" className="container" style={{ textAlign: 'center' }}>
        <h2>Categories</h2>
        <div className="categories-container">
          {categories.map(cat => (
            <a key={cat.name} href={`#/categories#${cat.name}`} className="category-btn" data-track-cta="category_open" data-track-location="home_categories">
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: 40 }}>
        <h2>About FlutPulse</h2>
        <p style={{ maxWidth: 600, margin: '0 auto', color: '#aaa', lineHeight: 1.6 }}>
          FlutPulse is a technical blog focused on solving real-world Flutter problems
          with clear, practical, and developer-friendly solutions.
        </p>
        <div style={{ marginTop: 20 }}>
          <a href="mailto:flutpulse@proton.me?subject=FlutPulse%20Newsletter%20Subscription" className="btn btn-primary" data-track-cta="newsletter_signup" data-track-location="home_about">Get Weekly Flutter Tips</a>
        </div>
      </div>
    </>
  )
}
