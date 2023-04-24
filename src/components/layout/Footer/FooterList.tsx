import React, { FC } from "react";
import styles from "./footer.module.scss";
import FooterListItem from "./FooterListItem";

export interface IFooterListProps {
  items: string[];
  title: string;
}

const FooterList: FC<IFooterListProps> = ({ items, title }) => {
  return (
    <div className={styles.list_wrapper}>
      <span className={styles.list__title}>{title}</span>
      <ul className={styles.list}>
        {items.map((item) => (
          <FooterListItem key={item} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
