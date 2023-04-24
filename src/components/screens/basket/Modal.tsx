import { FC } from "react";
import styles from "./basket.module.scss";

export interface IModalProps {
  showModal: boolean;
  toggleShowModal: () => void;
}

const Modal: FC<IModalProps> = ({ showModal, toggleShowModal }) => {
  return (
    <div
      onClick={(e) => toggleShowModal()}
      className={`${styles.modal} ${showModal ? "" : styles.hidden}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <img src="img/successfully.svg" alt="успешно" />
        <span className={styles.modal_title}>Спасибо за заказ</span>
        <span className={styles.modal_info}>
          Наш менеджер свяжется с вами в ближайшее время
        </span>
        <button onClick={() => toggleShowModal()} className={styles.closeBtn}>
          <img src="img/closeBtn.svg" alt="x" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
