import React, { FC } from "react";

import styles from "./productsTypes.module.scss";
import ProductsTypesItem from "./ProductsTypesItem";

interface ProductsTypesProps {
  types: string[];
  selectedTypes: string[];
  onClick: (type: string) => void;
}

const ProductsTypes: FC<ProductsTypesProps> = ({
  types,
  selectedTypes,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      {types.map((type) => (
        <ProductsTypesItem
          key={type}
          type={type}
          selectedTypes={selectedTypes}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ProductsTypes;
