import styles from "./product.module.scss";

const ProductHelpBtns = () => {
  return (
    <div className={styles.helpBtns}>
      <div className={styles.helpBlock}>
        <img src="/img/share.svg" alt="share" />
      </div>

      <div className={styles.helpBlock}>
        <span className={styles.helpBlock__text}>
          При покупке от <b>3 000 ₽</b> бесплатная доставка по Кокчетаву и
          области
        </span>
      </div>

      <div className={styles.helpBlock}>
        <span className={styles.helpBlock__priceText}>Прайс-лист</span>
        <img src="/img/downloadProduct.svg" alt="download" />
      </div>
    </div>
  );
};

export default ProductHelpBtns;
