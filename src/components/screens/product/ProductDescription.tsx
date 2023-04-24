import styles from "./product.module.scss";
import { useToggle } from "../../../hooks/useToggle";

const ProductDescription = ({ description }: { description: string }) => {
  const [isShow, setIsShow] = useToggle(false);

  return (
    <div className={styles.description}>
      <span
        data-testid="btnToggle"
        onClick={() => setIsShow()}
        className={styles.description__title}
      >
        Описание
      </span>
      <img
        src="/img/sorting.svg"
        alt="\/"
        className={`${isShow && styles.rotate}`}
      />
      <div
        data-testid="dropDown"
        className={`${styles.description__wrapper} ${!isShow && styles.hidden}`}
      >
        <p className={styles.description__text}>{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
