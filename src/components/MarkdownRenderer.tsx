import { useMemo } from 'react'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(str, { language: lang }).value}</code></pre>`
      } catch {
        // fall through
      }
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`
  }
})

interface Props {
  body: string
  title: string
  formattedDate: string
}

export default function MarkdownRenderer({ body, title, formattedDate }: Props) {
  const html = useMemo(() => {
    const cleanedBody = body
      .replace(/<h1>\{\{[^}]+\}\}<\/h1>/g, '')
      .replace(/<p class="article-date">[^<]*<\/p>/g, '')
    const header = `<h1>${title}</h1>\n<p class="article-date">Published on: ${formattedDate}</p>\n`
    return header + md.render(cleanedBody)
  }, [body, title, formattedDate])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
