import Image from 'next/image'

import PostHeader from '@/features/blog/components/PostHeader'
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
      <figure>
        <Image
          src={eyecatch.url}
          alt=""
          layout="responsive"
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width:1152px) 1152px, 100vw"
          priority
        />
      </figure>
    </article>
  )
}

export default Schedule
