import { FC } from "react";
import ProductCard, { IProduct } from "../ProductCard/ProductCard";

import styles from "./productList.module.scss";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        {products.map((product, index) => (
          <ProductCard key={product.barcode} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
