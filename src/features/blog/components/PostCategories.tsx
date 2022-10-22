import Link from 'next/link'

import { FolderIcon } from '@/components/elements/icons/FolderIcon'
import type { BlogType } from '@/features/blog/types/blog'
import styles from '@/styles/postCategories.module.css'

export const PostCategories: React.FC<Pick<BlogType, 'categories'>> = ({
  categories,
}) => {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FolderIcon />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <div className={styles.categoryTag}>
              <Link href={`/blog/category/${slug}`}>
                <p className={styles.categoryTagText}>#{name}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
