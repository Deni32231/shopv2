import React, { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.scss";

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children && <div className="container">{children}</div>}
      <Footer data-testid="footer" />
    </>
  );
};

export default Layout;
