import { FC } from "react";
import styles from "./header.module.scss";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header: FC = () => {
  return (
    <>
      <header data-testid="header" className={styles.wrapper}>
        <HeaderTop />

        <hr className={styles.line} />

        <HeaderBottom />

        <hr className={styles.line} />
      </header>
    </>
  );
};

export default Header;
