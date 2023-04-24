import React, { FC } from "react";
import styles from "./title.module.scss";

interface TitleProps {
  title: string;
  children?: React.ReactNode;
}

const Title: FC<TitleProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Title;
