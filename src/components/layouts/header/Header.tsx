import Container from '@/components/layouts/container/Container'
import Logo from '@/components/layouts/logo/Logo'
import Nav from '@/components/layouts/nav/Nav'
import styles from '@/styles/header.module.css'

const Header = () => {
  return (
    <Container large>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </Container>
  )
}
export default Header
