import React from "react";
import Product from "../components/screens/product/Product";
import { useCurrentProduct } from "../hooks/useCurrentProduct";

const ProductPage = () => {
  const product = useCurrentProduct();

  return <Product product={product} />;
};

export default ProductPage;
