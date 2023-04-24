import {
  IItem,
  addItem,
  deleteItem,
  removeItem,
} from "../../../store/reducers/basketSlice";
import styles from "./basket.module.scss";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";

const BasketItem = ({ item }: { item: IItem }) => {
  const dispatch = useDispatch();

  return (
    <div key={item.product.barcode} className={styles.basketItem}>
      <div className={styles.img_wrapper}>
        <img src={item.product.urlImg} alt={item.product.name} />
      </div>
      <div className={styles.item_info}>
        <img src="img/bottle.svg" alt="bottle" />
        <span className={styles.item_size}>{item.product.size}</span>
        <p className={styles.item_name}>
          {item.product.brand} {item.product.name}
        </p>
        <p className={styles.item_description}>{item.product.description}</p>
      </div>
      <div className={styles.right_wrap}>
        <div className={styles.count}>
          <input
            onClick={() => dispatch(removeItem(item.product))}
            readOnly
            type="button"
            value="-"
          />
          <span>{item.count}</span>
          <input
            onClick={() => dispatch(addItem(item.product))}
            readOnly
            type="button"
            value="+"
          />
        </div>
        <span className={styles.price}>
          {item.product.price * item.count} руб
        </span>
        <Button>
          <div
            onClick={() => dispatch(deleteItem(item.product))}
            className={styles.delete_wrapper}
          >
            <img src="img/delete.svg" alt="delete" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BasketItem;
