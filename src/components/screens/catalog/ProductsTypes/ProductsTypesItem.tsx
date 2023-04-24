import React, { FC } from "react";
import styles from "./productsTypes.module.scss";

export interface IProductsTypesItemProps {
  selectedTypes: string[];
  onClick: (type: string) => void;
  type: string;
}

const ProductsTypesItem: FC<IProductsTypesItemProps> = ({
  onClick,
  type,
  selectedTypes,
}) => {
  const style = selectedTypes.find((selectedType) => selectedType === type)
    ? styles.active
    : "";

  return (
    <span onClick={() => onClick(type)} className={`${styles.item} ${style}`}>
      {type}
    </span>
  );
};

export default ProductsTypesItem;
