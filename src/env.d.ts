declare namespace NodeJS {
  interface ProcessEnv {
    BLOG_POSTS: import('./data/posts').BlogPost[]
  }
}
