import Link from 'next/link'

import { pagesPath } from '@/lib/$path'
import styles from '@/styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href={pagesPath.$url()}>
      <a className={boxOn ? styles.box : styles.basic}>TSUNA TSUNA</a>
    </Link>
  )
}

export default Logo
