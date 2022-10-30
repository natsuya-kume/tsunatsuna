import Image from 'next/image'

import { PostBody } from '@/components/layouts/postBody/PostBody'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/layouts/twoColumn/TwoColumn'
import { ConvertBody } from '@/features/blog/components/ConvertBody'
import { Pagination } from '@/features/blog/components/Pagination'
import { PostCategories } from '@/features/blog/components/PostCategories'
import PostHeader from '@/features/blog/components/PostHeader'
import type { BlogType } from '@/features/blog/types/blog'
const Post: React.FC<BlogType> = ({
  title,
  publishDate,
  content,
  eyecatch,
  categories,
  prevPost,
  nextPost,
}) => {
  return (
    <article>
      <PostHeader title={title} publish={publishDate} />
      <figure>
        <Image
          key={eyecatch.url}
          src={eyecatch.url}
          alt=""
          layout="responsive"
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width:1152px) 1152px, 100vw"
          priority
          placeholder="blur"
          blurDataURL={eyecatch.blurDataURL && eyecatch.blurDataURL}
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <ConvertBody contentHTML={content} />
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <PostCategories categories={categories} />
        </TwoColumnSidebar>
      </TwoColumn>
      <Pagination
        prevText={prevPost.title}
        prevUrl={`/blog/${prevPost.slug}`}
        nextText={nextPost.title}
        nextUrl={`/blog/${nextPost.slug}`}
      />
    </article>
  )
}

export default Post
