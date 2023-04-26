import { ReactNode, memo } from 'react'

import styles from '@/components/layouts/navigation/navLinkContainer/styles.module.css'
import { useNav } from '@/components/layouts/navigation/useNav'
type Props = {
  children: ReactNode
}

export const NavLinkContainer = memo(({ children }: Props) => {
  const { closeNav } = useNav()

  return (
    <div onClick={closeNav}>
      <div className={styles.navList}>
        <div className={styles.navChild}>{children}</div>
      </div>
    </div>
  )
})
