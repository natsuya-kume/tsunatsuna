import type { ReactNode } from 'react'

import styles from '@/styles/twoColumn.module.css'

type Props = {
  children: ReactNode
}

export const TwoColumn: React.FC<Props> = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

export const TwoColumnMain: React.FC<Props> = ({ children }) => {
  return <div className={styles.main}>{children}</div>
}

export const TwoColumnSidebar: React.FC<Props> = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>
}
