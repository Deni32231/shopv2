import { useEffect, useState } from "react";
import productsData from "../../../data/products.json";
import styles from "./admin.module.scss";
import { useProductsTypes } from "../../../hooks/useProductsTypes";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useToggle } from "../../../hooks/useToggle";
import ProductsList from "./ProductsList";
import Modal from "./Modal";

const AdminPanelBlock = () => {
  const [products, setProducts] = useLocalStorage("products", productsData);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showModal, toggleShowModal] = useToggle(false);
  const [typesSelect, setTypesSelect] = useState([] as string[]);

  const types = useProductsTypes();

  useEffect(() => {
    if (products.length !== 0) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      setProducts(productsData);
    }
  }, [products]);

  const removeProduct = (barcode: number) => {
    setProducts([...products].filter((product) => product.barcode !== barcode));
  };

  return (
    <div className={styles.wrapper}>
      <ProductsList
        products={products}
        toggleShowModal={() => toggleShowModal()}
        setCurrentIndex={(index) => setCurrentIndex(index)}
        setCurrentProduct={(product) => setCurrentProduct(product)}
        removeProduct={(barcode) => removeProduct(barcode)}
      />
      <Modal
        products={products}
        currentProduct={currentProduct}
        toggleShowModal={toggleShowModal}
        typesSelect={typesSelect}
        showModal={showModal}
        currentIndex={currentIndex}
        setCurrentProduct={setCurrentProduct}
        setProducts={setProducts}
        setTypesSelect={setTypesSelect}
      />
    </div>
  );
};

export default AdminPanelBlock;
