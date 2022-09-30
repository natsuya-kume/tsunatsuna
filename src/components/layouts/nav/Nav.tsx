import Link from "next/link";
import styles from "@/styles/nav.module.css";
import HomeIcon from "@/components/elements/icons/HomeIcon";
import ProfileIcon from "@/components/elements/icons/ProfileIcon";
import BlogIcon from "@/components/elements/icons/BlogIcon";
import WorksIcon from "@/components/elements/icons/WorksIcon";
import ContactIcon from "@/components/elements/icons/ContactIcon";
import PrivacyIcon from "@/components/elements/icons/PrivacyIcon";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <>
          <HomeIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Home"
            linkTextStyle={styles.navChildText}
          />
        </>
      </Link>
      <Link href="/profile">
        <>
          <ProfileIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Profile"
            linkTextStyle={styles.navChildText}
          />
        </>
      </Link>
      <Link href="/blog">
        <>
          <BlogIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Blog"
            linkTextStyle={styles.navChildText}
          />
        </>
      </Link>
      <Link href="/works">
        <>
          <WorksIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Works"
            linkTextStyle={styles.navChildText}
          />
        </>
      </Link>
      <Link href="/contact">
        <>
          <ContactIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Contact"
            linkTextStyle={styles.navChildText}
          />
        </>
      </Link>
      <Link href="/privacy">
        <>
          <PrivacyIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Privacy"
            linkTextStyle={styles.navChildText}
          />
        </>
      </Link>
    </div>
  );
};

export default Nav;
