import styles from "@/styles/header.module.css";
import Container from "@/components/layouts/container/Container";
import Logo from "@/components/layouts/logo/Logo";
import Nav from "@/components/layouts/nav/Nav";

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};
export default Header;
