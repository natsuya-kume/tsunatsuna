import type { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import Container from '@/components/layouts/container/Container'
import { getAllSlugs, getPostBySlug } from '@/features/blog/api/getBlog'
import Post from '@/features/blog/components/Post'
import type { BlogType, SlugType } from '@/features/blog/types/blog'
import { eyecatchLocal } from '@/lib/constants'
import { prevNextPost } from '@/lib/prevNextPost'

const PostPage: React.FC<BlogType> = ({
  title,
  publishDate,
  content,
  eyecatch,
  categories,
  prevPost,
  nextPost,
}) => {
  return (
    <Container>
      <Post
        title={title}
        publishDate={publishDate}
        content={content}
        eyecatch={eyecatch}
        categories={categories}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </Container>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  const allSlugs: SlugType[] = await getAllSlugs()
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }
  const post = await getPostBySlug(slug)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  const allSlugs: SlugType[] = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publishDate: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}
