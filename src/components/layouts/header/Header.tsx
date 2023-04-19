import Container from '@/components/layouts/container/Container'
import styles from '@/components/layouts/header/styles.module.css'
import { Logo } from '@/components/layouts/logo/Logo'
import { Navigation } from '@/components/layouts/navigation/Navigation'

export const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  )
}
