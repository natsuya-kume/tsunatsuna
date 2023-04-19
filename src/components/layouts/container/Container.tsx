import type { ReactNode } from 'react'

import styles from '@/components/layouts/container/styles.module.css'

type Props = {
  children: ReactNode
  large?: boolean | undefined
}

const Container = ({ children, large = false }: Props) => {
  return (
    <div className={large ? styles.largeContainer : styles.defaultContainer}>
      {children}
    </div>
  )
}
export default Container
