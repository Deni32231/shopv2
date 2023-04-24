import { FC } from "react";
import styles from "./product.module.scss";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";
import ProductBuy from "./ProductBuy";
import ProductHelpBtns from "./ProductHelpBtns";
import ProductFirstInfo from "./ProductFirstInfo";
import ProductDescription from "./ProductDescription";
import ProductCharacteristics from "./ProductCharacteristics";
import NavigationPage from "../../shared/navigationPage/NavigationPage";

interface IProductBlockProps {
  product: IProduct;
}

const Product: FC<IProductBlockProps> = ({ product }) => {
  const productTypeUrl =
    product.sizeType === "bottle" ? "/img/bottle.svg" : "/img/box.svg";

  return (
    <>
      <NavigationPage elements={[product.name]} />
      <div className={styles.wrapper}>
        <div className={styles.img__wrapper}>
          <img className={styles.img} src={product.urlImg} alt={product.name} />
        </div>

        <div className={styles.info}>
          <span className={styles.stock}>В наличии</span>
          <span className={styles.name}>
            <b>{product.brand} </b>
            {product.name}
          </span>

          <div className={styles.size__wrapper}>
            <img src={productTypeUrl} alt={product.sizeType} />
            <span className={styles.size}>{product.size}</span>
          </div>

          <ProductBuy product={product} />

          <ProductHelpBtns />

          <ProductFirstInfo product={product} />

          <ProductDescription description={product.description} />

          <ProductCharacteristics product={product} />
        </div>
      </div>
    </>
  );
};

export default Product;
