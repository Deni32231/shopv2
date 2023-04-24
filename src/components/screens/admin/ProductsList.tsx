import { FC } from "react";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";
import styles from "./admin.module.scss";
import ProductsItem from "./ProductsItem";

export interface IProductsListProps {
  products: IProduct[];
  setCurrentProduct: (product: IProduct) => void;
  setCurrentIndex: (num: number) => void;
  toggleShowModal: () => void;
  removeProduct: (barcode: number) => void;
}

const ProductsList: FC<IProductsListProps> = ({
  products,
  setCurrentIndex,
  setCurrentProduct,
  toggleShowModal,
  removeProduct,
}) => {
  return (
    <div className={styles.products}>
      {products.map((product, index) => (
        <ProductsItem
          key={product.barcode}
          product={product}
          index={index}
          setCurrentIndex={setCurrentIndex}
          setCurrentProduct={setCurrentProduct}
          toggleShowModal={toggleShowModal}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductsList;
