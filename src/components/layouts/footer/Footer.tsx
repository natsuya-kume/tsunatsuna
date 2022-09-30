import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Container from "@/components/layouts/container/Container";
import TwitterIcon from "@/components/elements/icons/TwitterIcon";
import GithubIcon from "@/components/elements/icons/GithubIcon";

const Footer = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.flexContainer}>
          <div className={styles.socialIconContainer}>
            <Link href="https://twitter.com/natsuya_IT">
              {/* This fragment is necessary to hide Next.js bug error */}
              <>
                <TwitterIcon style={styles.socialIcon} />
              </>
            </Link>
            <Link href="https://github.com/natsuya-kume">
              <>
                <GithubIcon style={styles.socialIcon} />
              </>
            </Link>
          </div>
          <div>
            <p className={styles.copyrightText}>©️ 2022 Natsuya</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
