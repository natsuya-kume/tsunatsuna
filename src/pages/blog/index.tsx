import { getPlaiceholder } from 'plaiceholder'

import Container from '@/components/layouts/container/Container'
import Meta from '@/components/layouts/meta/Meta'
import { getAllPosts } from '@/features/blog/api/getBlog'
import Posts from '@/features/blog/components/Posts'
import type { PostsType } from '@/features/blog/types/blog'
import { eyecatchLocal } from '@/lib/constants'
import { hasProperty } from '@/lib/hasProperty'

type Props = {
  posts: PostsType[]
}

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="This is blog list page" />
      <Posts posts={posts} />
    </Container>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const posts: PostsType[] = await getAllPosts()

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
      posts: posts,
    },
  }
}
