import React from "react";
import Button from "../../ui/Button/Button";
import styles from "./footer.module.scss";

const FooterPriceList = () => {
  return (
    <div className={styles.price}>
      <span className={styles.price__title}>Скачать прайс-лист:</span>
      <Button>
        <div className={styles.downloadBtn}>
          <span className={styles.downloadBtn__text}>Прайс-лист</span>
          <img
            className={styles.catalogBtn__img}
            src="/img/download.svg"
            alt=""
          />
        </div>
      </Button>
      <span className={styles.message__span}>Связь в мессенджерах:</span>
      <div className={styles.message__wrapper}>
        <img src="/img/wh.png" alt="" />
        <img src="/img/tg.png" alt="" />
      </div>
    </div>
  );
};

export default FooterPriceList;
