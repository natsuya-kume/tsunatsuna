import Link from 'next/link'

import GithubIcon from '@/components/elements/icons/GithubIcon'
import TwitterIcon from '@/components/elements/icons/TwitterIcon'
import Container from '@/components/layouts/container/Container'
import styles from '@/styles/footer.module.css'

const Footer = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.flexContainer}>
          <div className={styles.socialIconContainer}>
            <Link href="https://twitter.com/natsuya_IT">
              {/* This fragment is necessary to hide Next.js bug error */}
              <div>
                <TwitterIcon style={styles.socialIcon} />
              </div>
            </Link>
            <Link href="https://github.com/natsuya-kume">
              <div>
                <GithubIcon style={styles.socialIcon} />
              </div>
            </Link>
          </div>
          <div>
            <p className={styles.copyrightText}>©️ 2023 Natsuya Kume</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Footer
