import Link from "next/link";
import styles from "@/styles/logo.module.css";

const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>Natsuya Kume</a>
    </Link>
  );
};

export default Logo;
