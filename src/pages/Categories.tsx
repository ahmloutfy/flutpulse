import { categories } from '../data/posts'

export default function Categories() {
  return (
    <div className="custom-category-wrapper">
      <h1 className="custom-category-title">Articles by Category</h1>
      {categories.map(cat => (
        <div className="custom-category-block" id={cat.name} key={cat.name}>
          <h2 className="custom-category-header">
            <span>📁 {cat.name}</span>
            <span className="custom-category-count">
              {cat.posts.length} {cat.posts.length === 1 ? 'Article' : 'Articles'}
            </span>
          </h2>
          <div className="custom-links-list">
            {cat.posts.map(post => (
              <a key={post.slug} href={`#/articles/${post.slug}`} className="custom-article-item">
                <span className="custom-item-title">📄 {post.title}</span>
                <span className="custom-item-date">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                  <span style={{ color: '#6cff6c', marginLeft: 8 }}>→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
