import type { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import Container from '@/components/layouts/container/Container'
import { getPostBySlug } from '@/features/blog/api/getBlog'
import Post from '@/features/blog/components/Post'
import type { BlogType } from '@/features/blog/types/blog'
import { eyecatchLoacal } from '@/lib/constants'

const PostPage: React.FC<BlogType> = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) => {
  return (
    <Container>
      <Post
        title={title}
        publish={publish}
        content={content}
        eyecatch={eyecatch}
        categories={categories}
      />
    </Container>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  return {
    paths: ['/blog/schedule', '/blog/music', '/blog/micro'],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }
  const post = await getPostBySlug(slug)
  const eyecatch = post.eyecatch ?? eyecatchLoacal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
    },
  }
}
