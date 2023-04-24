import React, { FC } from "react";
import styles from "./admin.module.scss";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";
import { toggleStateValue } from "../../../utils/toggleStateValue";
import { useProductsTypes } from "../../../hooks/useProductsTypes";

export interface IModalProps {
  products: IProduct[];
  currentProduct: IProduct;
  currentIndex: number;
  typesSelect: string[];
  showModal: boolean;
  toggleShowModal: () => void;
  setCurrentProduct: (product: IProduct) => void;
  setProducts: (products: IProduct[]) => void;
  setTypesSelect: React.Dispatch<React.SetStateAction<string[]>>;
}

const Modal: FC<IModalProps> = ({
  products,
  currentProduct,
  currentIndex,
  typesSelect,
  showModal,
  toggleShowModal,
  setCurrentProduct,
  setProducts,
  setTypesSelect,
}) => {
  const types = useProductsTypes();
  return (
    <div
      onClick={() => {
        toggleShowModal();
        const tmpProducts = [...products];

        setCurrentProduct({ ...currentProduct, typeOfCare: typesSelect });

        tmpProducts[currentIndex] = currentProduct;
        setProducts(tmpProducts);
      }}
      className={`${styles.modal_wrapper} ${showModal ? "" : styles.hidden}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modal}
      >
        <label>
          <span className={styles.modal_span}>Штрихкод</span>
          <input
            className={styles.modal_input}
            type="number"
            value={currentProduct.barcode}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                barcode: Number(e.target.value),
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Описание</span>
          <input
            className={styles.modal_input}
            type="text"
            value={currentProduct.description}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                description: e.target.value,
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Производитель</span>
          <input
            className={styles.modal_input}
            type="text"
            value={currentProduct.manufacturer}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                manufacturer: e.target.value,
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Название</span>
          <input
            className={styles.modal_input}
            type="text"
            value={currentProduct.name}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                name: e.target.value,
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Цена</span>
          <input
            className={styles.modal_input}
            type="number"
            value={currentProduct.price}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                price: Number(e.target.value),
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Размер упаковки</span>
          <input
            className={styles.modal_input}
            type="text"
            value={currentProduct.size}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                name: e.target.value,
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Тип упаковки</span>
          <select
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                sizeType: e.target.value,
              });
            }}
          >
            <option value="bottle">бутылка</option>
            <option value="box">коробка</option>
          </select>
        </label>

        <label>
          <span className={styles.modal_span}>URL картинки</span>
          <input
            className={styles.modal_input}
            type="text"
            value={currentProduct.urlImg}
            onChange={(e) => {
              setCurrentProduct({
                ...currentProduct,
                urlImg: e.target.value,
              });
            }}
          />
        </label>

        <label>
          <span className={styles.modal_span}>Тип ухода</span>

          <select
            onChange={(e) => {
              toggleStateValue(e.target.value, typesSelect, setTypesSelect);
              e.target.value = "";
            }}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <input
          className={styles.modal_selectInput}
          readOnly
          type="text"
          value={typesSelect.join(" ")}
        />
      </div>
    </div>
  );
};

export default Modal;
