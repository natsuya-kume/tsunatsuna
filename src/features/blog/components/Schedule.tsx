import PostHeader from './PostHeader'

import type { BlogType } from '@/features/blog/types/blog'

const Schedule: React.FC<BlogType> = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) => {
  return (
    <article>
      <PostHeader title={title} subtitle="Blog article" publish={publish} />
    </article>
  )
}

export default Schedule
