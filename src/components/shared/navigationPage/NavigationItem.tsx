import styles from "./navigationPage.module.scss";

const NavigationItem = ({ text }: { text: string }) => {
  return <span className={styles.item}>{text}</span>;
};

export default NavigationItem;
