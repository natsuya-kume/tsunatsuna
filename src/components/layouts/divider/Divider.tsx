import type { CSSProperties } from 'react'

import styles from '@/styles/divider.module.css'

type Props = {
  style?: CSSProperties | undefined
}

const Divider: React.FC<Props> = ({ style }) => {
  return <div className={styles.divider} style={style} />
}
export default Divider
