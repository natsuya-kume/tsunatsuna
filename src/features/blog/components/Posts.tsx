import Image from 'next/image'
import Link from 'next/link'

import ConvertDate from './ConvertDate'

import type { PostsType } from '@/features/blog/types/blog'
import styles from '@/styles/posts.module.css'

type Props = {
  posts: PostsType[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch, publishDate, categories }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  width={eyecatch.width}
                  height={eyecatch.height}
                  sizes="(min-width: 1152px) 575px, 50vw"
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
              <div className={styles.categoryContainer}>
                {categories.map(({ name }: { name: string }) => (
                  <p key={slug}>{name}</p>
                ))}
              </div>
              <ConvertDate
                dateISO={publishDate}
                style={{
                  color: '#656a7b',
                  fontSize: '0.8em',
                  alignItems: 'end',
                  display: 'flex',
                  justifyContent: 'end',
                }}
              />
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Posts
