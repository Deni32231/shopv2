import { IProduct } from "../../shared/product/ProductCard/ProductCard";
import styles from "./product.module.scss";

const ProductFirstInfo = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.firstInfo}>
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
        460404
      </p>
      <p className={styles.firstInfo__text}>
        <span className={styles.firstInfo__span}>Кол-во в коробке:</span>2
      </p>
      <p className={styles.firstInfo__text}>
        <span className={styles.firstInfo__span}>Штрихкод:</span>
        {product.barcode}
      </p>
      <p className={styles.firstInfo__text}>
        <span className={styles.firstInfo__span}>
          Размеры коробки
          <span className={styles.firstInfo__smallText}>(Д*Ш*В)</span>:
        </span>
        10х10х10
      </p>
      <p className={styles.firstInfo__text}>
        <span className={styles.firstInfo__span}>Вес коробки:</span>
        {product.size}
      </p>
    </div>
  );
};

export default ProductFirstInfo;
