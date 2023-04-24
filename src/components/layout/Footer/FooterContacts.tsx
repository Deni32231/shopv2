import React from "react";
import styles from "./footer.module.scss";

const FooterContacts = () => {
  return (
    <div className={styles.contacts}>
      <span className={styles.contacts__title}>Контакты:</span>
      <span className={styles.phone}>+7 (777) 490-00-91</span>
      <span className={styles.workTime}>время работы: 9:00-20:00</span>
      <span className={styles.phoneBtn}>Заказать звонок</span>
      <span className={styles.email}>opt.sultan@mail.ru </span>
      <span className={styles.emailHelper}>На связи в любое время</span>
      <div className={styles.cards}>
        <img src="/img/visa.png" alt="visa" />
        <img src="/img/mastercard.png" alt="mastercard" />
      </div>
    </div>
  );
};

export default FooterContacts;
