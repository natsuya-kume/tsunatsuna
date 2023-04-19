import type { CSSProperties } from 'react'

import styles from '@/components/layouts/divider/styles.module.css'

type Props = {
  style?: CSSProperties | undefined
}

export const Divider: React.FC<Props> = ({ style }) => {
  return <div className={styles.divider} style={style} />
}
