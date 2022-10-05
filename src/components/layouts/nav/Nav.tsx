import Link from "next/link";
import styles from "@/styles/nav.module.css";
import HomeIcon from "@/components/elements/icons/HomeIcon";
import ProfileIcon from "@/components/elements/icons/ProfileIcon";
import BlogIcon from "@/components/elements/icons/BlogIcon";
import WorksIcon from "@/components/elements/icons/WorksIcon";
import ContactIcon from "@/components/elements/icons/ContactIcon";
import PrivacyIcon from "@/components/elements/icons/PrivacyIcon";
import { pagesPath } from "@/lib/$path";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <div>
          <HomeIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Home"
            linkTextStyle={styles.navChildText}
          />
        </div>
      </Link>
      <Link href={pagesPath.profile.$url()}>
        <div>
          <ProfileIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Profile"
            linkTextStyle={styles.navChildText}
          />
        </div>
      </Link>
      <Link href="/blog">
        <div>
          <BlogIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Blog"
            linkTextStyle={styles.navChildText}
          />
        </div>
      </Link>
      <Link href="/works">
        <div>
          <WorksIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Works"
            linkTextStyle={styles.navChildText}
          />
        </div>
      </Link>
      <Link href="/contact">
        <div>
          <ContactIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Contact"
            linkTextStyle={styles.navChildText}
          />
        </div>
      </Link>
      <Link href="/privacy">
        <div>
          <PrivacyIcon
            navListStyle={styles.navList}
            navChildstyle={styles.navChild}
            linkText="Privacy"
            linkTextStyle={styles.navChildText}
          />
        </div>
      </Link>
    </div>
  );
};

export default Nav;
