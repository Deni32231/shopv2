import { FC } from "react";
import styles from "./admin.module.scss";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";

export interface IProductItemProps {
  product: IProduct;
  index: number;
  setCurrentProduct: (product: IProduct) => void;
  setCurrentIndex: (index: number) => void;
  toggleShowModal: () => void;
  removeProduct: (barcode: number) => void;
}

const ProductsItem: FC<IProductItemProps> = ({
  product,
  index,
  setCurrentIndex,
  setCurrentProduct,
  toggleShowModal,
  removeProduct,
}) => {
  return (
    <div className={styles.product}>
      <span>
        {product.brand} {product.name} {product.barcode}
      </span>
      <div className={styles.product_btns}>
        <button
          onClick={() => {
            setCurrentProduct(product);
            setCurrentIndex(index);
            toggleShowModal();
          }}
          className={styles.product_btn}
        >
          редактировать
        </button>
        <button
          onClick={() => {
            removeProduct(product.barcode);
          }}
          className={styles.product_btn}
        >
          удалить
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
