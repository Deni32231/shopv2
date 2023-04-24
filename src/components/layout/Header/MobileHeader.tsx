import React from "react";
import styles from "./header.module.scss";
import BasketWidget from "./BasketWidget/BasketWidget";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../router";

const MobileHeader = () => {
  return (
    <header className={styles.mobile__header}>
      <div className="container">
        <div className={styles.mobile__top}>
          <img src="/img/burger.svg" alt="burger" />
          <img src="/img/header_logo.svg" alt="logo" />
          <BasketWidget />
        </div>

        <div className={styles.mobile__bottom}>
          <div className={styles.mobile__block}>
            <Link to={RouteNames.CATALOG}>
              <img src="/img/mobileCatalog.svg" alt="" />
              <span>Каталог</span>
            </Link>
          </div>

          <div className={styles.mobile__block}>
            <img src="/img/mobileSearch.svg" alt="" />
            <span>Поиск</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
