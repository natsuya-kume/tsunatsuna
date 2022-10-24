import Link from 'next/link'

import BlogIcon from '@/components/elements/icons/BlogIcon'
import ContactIcon from '@/components/elements/icons/ContactIcon'
import HomeIcon from '@/components/elements/icons/HomeIcon'
import PrivacyIcon from '@/components/elements/icons/PrivacyIcon'
import ProfileIcon from '@/components/elements/icons/ProfileIcon'
import WorksIcon from '@/components/elements/icons/WorksIcon'
import { useNav } from '@/hooks/useNav'
import { pagesPath } from '@/lib/$path'
import styles from '@/styles/nav.module.css'

const Nav = () => {
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
            <HomeIcon
              navListStyle={styles.navList}
              navChildstyle={styles.navChild}
              linkText="Home"
              linkTextStyle={styles.navChildText}
            />
          </div>
        </Link>
        <Link href={pagesPath.profile.$url()}>
          <div onClick={closeNav}>
            <ProfileIcon
              navListStyle={styles.navList}
              navChildstyle={styles.navChild}
              linkText="Profile"
              linkTextStyle={styles.navChildText}
            />
          </div>
        </Link>
        <Link href={pagesPath.blog.$url()}>
          <div onClick={closeNav}>
            <BlogIcon
              navListStyle={styles.navList}
              navChildstyle={styles.navChild}
              linkText="Blog"
              linkTextStyle={styles.navChildText}
            />
          </div>
        </Link>
        <Link href="/works">
          <div onClick={closeNav}>
            <WorksIcon
              navListStyle={styles.navList}
              navChildstyle={styles.navChild}
              linkText="Works"
              linkTextStyle={styles.navChildText}
            />
          </div>
        </Link>
        <Link href="/contact">
          <div onClick={closeNav}>
            <ContactIcon
              navListStyle={styles.navList}
              navChildstyle={styles.navChild}
              linkText="Contact"
              linkTextStyle={styles.navChildText}
            />
          </div>
        </Link>
        <Link href={pagesPath.privacy.$url()}>
          <div onClick={closeNav}>
            <PrivacyIcon
              navListStyle={styles.navList}
              navChildstyle={styles.navChild}
              linkText="Privacy"
              linkTextStyle={styles.navChildText}
            />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
