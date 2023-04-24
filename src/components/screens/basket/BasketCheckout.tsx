import React, { FC } from "react";
import styles from "./basket.module.scss";
import Button from "../../ui/Button/Button";
import { useDispatch } from "react-redux";
import { clearBasket } from "../../../store/reducers/basketSlice";

export interface IBasketCheckoutProps {
  toggleShowModal: () => void;
  allPrice: number;
}

const BasketCheckout: FC<IBasketCheckoutProps> = ({
  toggleShowModal,
  allPrice,
}) => {
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    dispatch(clearBasket());
    toggleShowModal();
  };
  return (
    <div className={styles.checkout}>
      <Button>
        <span onClick={checkoutHandler} className={styles.checkoutBtn_text}>
          Оформить заказ
        </span>
      </Button>
      <span className={styles.fullPrice}>{allPrice} руб</span>
    </div>
  );
};

export default BasketCheckout;
