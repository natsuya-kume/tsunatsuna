import { getPlaiceholder } from 'plaiceholder'

import Container from '@/components/layouts/container/Container'
import { getPostBySlug } from '@/features/blog/api/getBlog'
import Schedule from '@/features/blog/components/Schedule'
import type { BlogType } from '@/features/blog/types/blog'
import { eyecatchLoacal } from '@/lib/constants'

const SchedulePage: React.FC<BlogType> = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) => {
  return (
    <Container>
      <Schedule
        title={title}
        publish={publish}
        content={content}
        eyecatch={eyecatch}
        categories={categories}
        // blurDataURL={eyecatch.}
      />
    </Container>
  )
}

export default SchedulePage

export const getStaticProps = async () => {
  const slug = 'micro'

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
