import React, { FC } from "react";
import styles from "./footer.module.scss";

export interface IFooterListItemProps {
  text: string;
}

const FooterListItem: FC<IFooterListItemProps> = ({ text }) => {
  return <li className={styles.list__item}>{text}</li>;
};

export default FooterListItem;
