import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

function blogPostsPlugin() {
  const postsDir = join(process.cwd(), '_posts')
  const imagesDir = join(process.cwd(), 'images')

  return {
    name: 'flutpulse-blog-posts',
    config() {
      return {
        define: {
          'process.env.BLOG_POSTS': JSON.stringify(loadPosts(postsDir))
        }
      }
    },
    configureServer(server) {
      server.middlewares.use('/images', (req, res, next) => {
        next()
      })
    },
    generateBundle() {
      // Images are copied via publicDir
    }
  }
}

function loadPosts(dir) {
  const files = readdirSync(dir).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = readFileSync(join(dir, filename), 'utf-8')
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '')

    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (!fmMatch) return null

    const frontmatter = parseFrontmatter(fmMatch[1])
    const body = fmMatch[2]

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || filename.slice(0, 10),
      excerpt: frontmatter.excerpt || '',
      image: frontmatter.image || '',
      categories: frontmatter.categories || [],
      tags: frontmatter.tags || [],
      body
    }
  }).filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date))
}

function parseFrontmatter(text) {
  const result = {}
  const lines = text.split('\n')
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.*)$/)
    if (match) {
      const key = match[1]
      let value = match[2].trim()
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      } else if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''))
      }
      result[key] = value
    }
  }
  return result
}

export default defineConfig({
  plugins: [react(), blogPostsPlugin()],
  publicDir: 'public',
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
})
