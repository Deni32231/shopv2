import { FC, useState } from "react";
import styles from "./product.module.scss";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";
import { addItemWithCount } from "../../../store/reducers/basketSlice";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";

export interface IProductBuyProps {
  product: IProduct;
}

const ProductBuy: FC<IProductBuyProps> = ({ product }) => {
  const dispatch = useDispatch();

  const [amountProducts, setAmountProducts] = useState(1);

  const addProductsHandler = () => {
    dispatch(addItemWithCount({ product, count: amountProducts }));
  };

  const minusBtnHandler = () => {
    if (amountProducts > 1) {
      setAmountProducts(amountProducts - 1);
    }
  };

  const plusBtnHandler = () => {
    setAmountProducts(amountProducts + 1);
  };

  return (
    <div className={styles.buyBlock}>
      <span data-testid="price" className={styles.price}>
        {product.price * amountProducts} ₽
      </span>
      <div className={styles.amount__wrapper}>
        <input
          className={styles.buyBlock__btn}
          onClick={minusBtnHandler}
          type="button"
          value="-"
        />
        <span className={styles.amountProducts}>{amountProducts}</span>
        <input
          className={styles.buyBlock__btn}
          onClick={plusBtnHandler}
          type="button"
          value="+"
        />
      </div>

      <Button>
        <div onClick={addProductsHandler} className={styles.button__inner}>
          <span className={styles.button__text}>В КОРЗИНУ</span>
          <img src="/img/card_basket.svg" alt="basket" />
        </div>
      </Button>
    </div>
  );
};

export default ProductBuy;
