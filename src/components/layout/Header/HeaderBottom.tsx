import React from "react";
import SearchForm from "../../shared/searchForm/SearchForm";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../router";
import styles from "./header.module.scss";
import BasketWidget from "./BasketWidget/BasketWidget";

const HeaderBottom = () => {
  return (
    <div className="container">
      <div className={styles.bottom}>
        <img src="/img/header_logo.svg" alt="султан" />

        <Button>
          <Link to={RouteNames.CATALOG} className={styles.catalogBtn__link}>
            <div className={styles.catalogBtn}>
              Каталог
              <img
                className={styles.catalogBtn_img}
                src="/img/button_catalog.svg"
                alt=""
              />
            </div>
          </Link>
        </Button>

        <SearchForm callBack={() => console.log("search")} />

        <div className={styles.phone}>
          <div className={styles.phone__text}>
            <span className={styles.phone__number}>+7 (777) 490-00-91</span>
            <span className={styles.phone__worktime}>
              время работы: 9:00-20:00
            </span>
            <span className={styles.phone__btn}>Заказать звонок</span>
          </div>
          <img src="/img/woman_phone.png" alt="woman" />
        </div>

        <Button>
          <div className={styles.downloadBtn}>
            <span className={styles.downloadBtn__text}>Прайс-лист</span>
            <img
              className={styles.catalogBtn_img}
              src="/img/download.svg"
              alt=""
            />
          </div>
        </Button>

        <BasketWidget />
      </div>
    </div>
  );
};

export default HeaderBottom;
