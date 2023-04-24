import { useSelector } from "react-redux";
import styles from "./basket.module.scss";
import { RootState } from "../../../store/store";
import Modal from "./Modal";
import { useToggle } from "../../../hooks/useToggle";
import BasketList from "./BasketList";
import BasketCheckout from "./BasketCheckout";

const Basket = () => {
  const [showModal, toggleShowModal] = useToggle(false);

  const basket = useSelector((state: RootState) => state.basket);
  const items = basket.items;

  return (
    <div className={styles.basket} data-testid="basket">
      <BasketList items={items} />

      <BasketCheckout
        toggleShowModal={toggleShowModal}
        allPrice={basket.priceAllItems}
      />

      <Modal showModal={showModal} toggleShowModal={toggleShowModal} />
    </div>
  );
};

export default Basket;
