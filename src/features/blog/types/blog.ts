export type BlogType = {
  title: string
  publish: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
    blurDataURL?: string
  }
  categories: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
    slug: string
  }[]
  prevPost: { title: string; slug: string }
  nextPost: { title: string; slug: string }
}
