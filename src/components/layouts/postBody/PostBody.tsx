import type { ReactNode } from 'react'

import styles from '@/styles/postBody.module.css'

type Props = {
  children: ReactNode
}

export const PostBody: React.FC<Props> = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}
