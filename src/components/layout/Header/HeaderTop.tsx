import React from "react";
import styles from "./header.module.scss";

const HeaderTop = () => {
  return (
    <div className="container">
      <div className={styles.top}>
        <div className={styles.top__left}>
          <div className={styles.location}>
            <img
              className={styles.location__marker}
              src="/img/marker.svg"
              alt="marker"
            />
            <div className={styles.location__text}>
              <address className={styles.location__address}>
                г. Кокчетав, ул. Ж. Ташенова 129Б{" "}
              </address>
              <span className={styles.location__help}>(Рынок Восточный)</span>
            </div>
          </div>
          <div className={styles.email}>
            <img className={styles.email__img} src="/img/mail.svg" alt="mail" />
            <div className={styles.email__text}>
              <span className={styles.email__address}>opt.sultan@mail.ru</span>
              <span className={styles.email__help}>На связи в любое время</span>
            </div>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>О компании</li>
            <li className={styles.nav__item}>Доставка и оплата</li>
            <li className={styles.nav__item}>Возврат</li>
            <li className={styles.nav__item}>Контакты</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
