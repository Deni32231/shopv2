import { FC } from "react";
import styles from "./navigationPage.module.scss";
import NavigationItem from "./NavigationItem";

interface NavigationPageProps {
  elements: string[];
}

const NavigationPage: FC<NavigationPageProps> = ({ elements }) => {
  return (
    <div className={styles.wrapper}>
      <NavigationItem text="Главная" />
      {elements.map((element) => (
        <NavigationItem key={element} text={element} />
      ))}
    </div>
  );
};

export default NavigationPage;
