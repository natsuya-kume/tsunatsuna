export type BlogType = {
  title: string
  publishDate: string
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
  prevPost: SlugType
  nextPost: SlugType
}

export type SlugType = {
  title: string
  slug: string
}

export type PostsType = {
  title: string
  slug: string
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
  publishDate: string
}

export type CategoryTypes = {
  name: string
  id: string
  slug: string
}
