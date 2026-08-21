export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  categories: string[]
  tags: string[]
  body: string
}

export interface Category {
  name: string
  posts: BlogPost[]
}

const rawPosts: BlogPost[] = process.env.BLOG_POSTS || []

export const posts: BlogPost[] = rawPosts.map(p => ({
  ...p,
  image: p.image || ''
}))

export const categories: Category[] = (() => {
  const map = new Map<string, BlogPost[]>()
  for (const post of posts) {
    for (const cat of post.categories) {
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(post)
    }
  }
  return Array.from(map.entries()).map(([name, catPosts]) => ({
    name,
    posts: catPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }))
})()
