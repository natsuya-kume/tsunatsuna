import Container from '@/components/layouts/container/Container'
import { getPostBySlug } from '@/features/blog/api/getBlog'
import Schedule from '@/features/blog/components/Schedule'
import type { BlogType } from '@/features/blog/types/blog'

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
      />
    </Container>
  )
}

export default SchedulePage

export const getStaticProps = async () => {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}
