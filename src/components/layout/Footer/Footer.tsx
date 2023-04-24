import React from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

import styles from "./footer.module.scss";
import FooterLeft from "./FooterLeft";
import FooterList from "./FooterList";
import FooterContacts from "./FooterContacts";
import FooterPriceList from "./FooterPriceList";

const Footer = () => {
  const firstListItems = [
    "О компании",
    "Доставка и оплата",
    "Возврат",
    "Контакты",
  ];
  const secondListItems = [
    "Бытовая химия",
    "Косметика и гигиена",
    "Товары для дома",
    "Товары для детей и мам",
    "Посуда",
  ];

  return (
    <div className={styles.bg} data-testid="footer">
      <div className="container">
        <div className={styles.content}>
          <FooterLeft />
          <FooterList items={firstListItems} title="Меню сайта:" />
          <FooterList items={secondListItems} title="Категории:" />
          <FooterPriceList />
          <FooterContacts />
        </div>
      </div>
    </div>
  );
};

export default Footer;
