import type { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import Container from '@/components/layouts/container/Container'
import {
  getAllCategories,
  getAllPostsByCategory,
} from '@/features/blog/api/getBlog'
import PostHeader from '@/features/blog/components/PostHeader'
import Posts from '@/features/blog/components/Posts'
import type { CategoryTypes, PostsType } from '@/features/blog/types/blog'
import { eyecatchLocal } from '@/lib/constants'
import { hasProperty } from '@/lib/hasProperty'

type Props = {
  name: string
  posts: PostsType[]
}

const CategoryPage: React.FC<Props> = ({ name, posts }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Catagory" />
      <Posts posts={posts} />
    </Container>
  )
}

export default CategoryPage

export const getStaticPaths = async () => {
  const allCats: CategoryTypes[] = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const catSlug = context.params?.slug

  const allCats: CategoryTypes[] = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  const posts: PostsType[] = await getAllPostsByCategory(cat?.id)

  for (const post of posts) {
    const hasEyecatchProperty = hasProperty(post, 'eyecatch')
    if (!hasEyecatchProperty) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      name: cat?.name,
      posts: posts,
    },
  }
}
