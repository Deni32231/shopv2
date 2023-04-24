import React from "react";
import { RootState } from "../../../../store/store";
import styles from "./basketWidget.module.scss";
import { useSelector } from "react-redux";
import { RouteNames } from "../../../../router";
import { Link } from "react-router-dom";

const BasketWidget = () => {
  const basket = useSelector((state: RootState) => state.basket);

  return (
    <div className={styles.basket}>
      <div className={styles.basketCount}>
        <Link to={RouteNames.BASKET} data-testid="basketLink">
          <img src="/img/basket_icon.svg" alt="basket" />
          <span className={styles.itemsCount}>{basket.countAllItems}</span>
        </Link>
      </div>
      <div className={styles.basketPrice}>
        <span className={styles.basketPrice__top}>Корзина</span>
        <span className={styles.itemsPrice}>{basket.priceAllItems} ₽</span>
      </div>
    </div>
  );
};

export default BasketWidget;
