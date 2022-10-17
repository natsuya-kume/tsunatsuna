import { getPlaiceholder } from 'plaiceholder'

import Container from '@/components/layouts/container/Container'
import { getAllPosts } from '@/features/blog/api/getBlog'
import Posts from '@/features/blog/components/Posts'
import type { PostsType } from '@/features/blog/types/blog'
import { eyecatchLocal } from '@/lib/constants'

type Props = {
  posts: PostsType[]
}

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      <Posts posts={posts} />
    </Container>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const posts: PostsType[] = await getAllPosts()

  for (const post of posts) {
    if (!(post && Object.prototype.hasOwnProperty.call(post, 'eyecatch'))) {
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
