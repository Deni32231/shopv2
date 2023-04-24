import React from "react";
import Input from "../../ui/Input/Input";
import styles from "./footer.module.scss";
import Button from "../../ui/Button/Button";

const FooterLeft = () => {
  return (
    <div className={styles.left}>
      <img src="/img/logo_footer.svg" alt="logo" />
      <p className={styles.left__text}>
        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
        Кокчетаве и Акмолинской области
      </p>
      <span className={styles.left_span}>Подпишись на скидки и акции</span>
      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <div className={styles.input__wrapper}>
          <Input placeholder="Введите ваш E-mail" />
          <div className={styles.btn__wrapper}>
            <Button>
              <div className={styles.email__btn}>
                <img src="/img/arrow.svg" alt="" />
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FooterLeft;
