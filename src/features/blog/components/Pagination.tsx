import Link from 'next/link'

import { LeftArrowIcon } from '@/components/elements/icons/LeftArrowIcon'
import styles from '@/styles/pagination.module.css'

export const Pagination = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <LeftArrowIcon />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <a className={styles.iconText}>
              <span>{nextText}</span>
              <LeftArrowIcon isTransform />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
