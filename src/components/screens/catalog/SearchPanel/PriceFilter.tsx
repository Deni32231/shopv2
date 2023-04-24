import React, { FC } from "react";
import styles from "./searchPanel.module.scss";

export interface IPriceFilterProps {
  price: { min: number; max: number };
  setPrice: (value: { min: number; max: number }) => void;
}

const PriceFilter: FC<IPriceFilterProps> = ({ price, setPrice }) => {
  const setMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, min: Number(e.target.value) });
  };

  const setMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, max: Number(e.target.value) });
  };

  return (
    <>
      <span className={styles.price_title}>
        Цена <b>руб</b>
      </span>
      <div className={styles.price__inputs}>
        <input
          data-testid="inputMin"
          type="number"
          min="0"
          max="10000"
          value={price.min}
          onChange={setMinPrice}
        />
        <span>-</span>
        <input
          data-testid="inputMax"
          type="number"
          min="0"
          max="10000"
          value={price.max}
          onChange={setMaxPrice}
        />
      </div>
    </>
  );
};

export default PriceFilter;
