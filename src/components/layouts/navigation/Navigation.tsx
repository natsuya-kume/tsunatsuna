import Link from 'next/link'

import BlogIcon from '@/components/elements/icons/BlogIcon'
import ContactIcon from '@/components/elements/icons/ContactIcon'
import HomeIcon from '@/components/elements/icons/HomeIcon'
import PrivacyIcon from '@/components/elements/icons/PrivacyIcon'
import ProfileIcon from '@/components/elements/icons/ProfileIcon'
import WorksIcon from '@/components/elements/icons/WorksIcon'
import { Text } from '@/components/elements/typography/text/Text'
import { NavLinkContainer } from '@/components/layouts/navigation/navLinkContainer/NavLinkContainer'
import styles from '@/components/layouts/navigation/styles.module.css'
import { useNav } from '@/components/layouts/navigation/useNav'
import { pagesPath } from '@/lib/$path'

export const Navigation = () => {
  const { toggleNav, closeNav, navIsOpen } = useNav()
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <div className={styles.list}>
        <Link href={pagesPath.$url()}>
          <div onClick={closeNav}>
            <NavLinkContainer>
              <HomeIcon />
              <Text color="primary" weight="700">
                Home
              </Text>
            </NavLinkContainer>
          </div>
        </Link>
        <Link href={pagesPath.profile.$url()}>
          <div onClick={closeNav}>
            <NavLinkContainer>
              <ProfileIcon />
              <Text color="primary" weight="700">
                Profile
              </Text>
            </NavLinkContainer>
          </div>
        </Link>
        <Link href={pagesPath.blog.$url()}>
          <div onClick={closeNav}>
            <NavLinkContainer>
              <BlogIcon />
              <Text color="primary" weight="700">
                Blog
              </Text>
            </NavLinkContainer>
          </div>
        </Link>
        <Link href={pagesPath.matchShare.$url()}>
          <div onClick={closeNav}>
            <NavLinkContainer>
              <WorksIcon />
              <Text color="primary" weight="700">
                マッチシェア
              </Text>
            </NavLinkContainer>
          </div>
        </Link>
        <Link href="/contact">
          <div onClick={closeNav}>
            <NavLinkContainer>
              <ContactIcon />
              <Text color="primary" weight="700">
                Contact
              </Text>
            </NavLinkContainer>
          </div>
        </Link>
        <Link href={pagesPath.privacy.$url()}>
          <div onClick={closeNav}>
            <NavLinkContainer>
              <PrivacyIcon />
              <Text color="primary" weight="700">
                Privacy
              </Text>
            </NavLinkContainer>
          </div>
        </Link>
      </div>
    </nav>
  )
}
