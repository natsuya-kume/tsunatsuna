import Link from 'next/link'

import styles from '@/components/layouts/logo/styles.module.css'
import { pagesPath } from '@/lib/$path'

export const Logo = () => {
  return (
    <Link href={pagesPath.$url()}>
      <div className={styles.logoContainer}>
        <a className={styles.mediumLogoText}>TSUNA</a>
        <a className={styles.smallLogoText}>TSUNA.com</a>
      </div>
    </Link>
  )
}
