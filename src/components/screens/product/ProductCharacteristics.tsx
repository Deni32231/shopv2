import styles from "./product.module.scss";
import { useToggle } from "../../../hooks/useToggle";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";

const ProductCharacteristics = ({ product }: { product: IProduct }) => {
  const [isShow, setIsShow] = useToggle(false);
  return (
    <div className={styles.characteristics}>
      <span
        onClick={() => setIsShow()}
        className={styles.characteristics__title}
      >
        Характеристики
      </span>
      <img
        src="/img/sorting.svg"
        alt="\/"
        className={`${isShow && styles.rotate}`}
      />
      <div
        className={`${styles.characteristics__wrapper} ${
          !isShow && styles.hidden
        }`}
      >
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Назначение:</span>
          {product.typeOfCare.join(" ")}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Тип:</span>
          {product.typeOfCare.join(" ")}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Производитель:</span>
          {product.manufacturer}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Бренд:</span>
          {product.brand}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Артикул:</span>
          {product.barcode}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Штрихкод:</span>
          {product.barcode}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Вес:</span>
          {product.sizeType}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Объем:</span>
          {product.size}
        </p>
        <p className={styles.firstInfo__text}>
          <span className={styles.firstInfo__span}>Кол-во в коробке:</span>
          {product.size}
        </p>
      </div>
    </div>
  );
};

export default ProductCharacteristics;
