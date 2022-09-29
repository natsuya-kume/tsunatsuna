import { ReactNode } from "react";
import Header from "@/components/layouts/header/Header";
import Divider from "@/components/layouts/divider/Divider";
import Footer from "@/components/layouts/footer/Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Divider />
      <Footer />
    </>
  );
};

export default Layout;
