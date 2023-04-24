import { IItem } from "../../../store/reducers/basketSlice";
import styles from "./basket.module.scss";
import BasketItem from "./BasketItem";

const BasketList = ({ items }: { items: IItem[] }) => {
  return (
    <div className={styles.basketItems}>
      {items.map((item) => (
        <BasketItem item={item} />
      ))}
    </div>
  );
};

export default BasketList;
