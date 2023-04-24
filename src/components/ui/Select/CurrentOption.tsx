import React, { FC } from "react";
import styles from "./select.module.scss";
import { SortingEnum } from "../../screens/catalog/Sorting/Sorting";

export interface ICurrentOptionProps {
  text: string;
  value: string;
  toggleShowOptions: () => void;
}

const CurrentOption: FC<ICurrentOptionProps> = ({
  toggleShowOptions,
  text,
  value,
}) => {
  const style =
    value === SortingEnum.NAME_REVERSE || value === SortingEnum.PRICE_REVERSE
      ? ""
      : styles.reverse;

  return (
    <div className={styles.currentOption} onClick={() => toggleShowOptions()}>
      <span className={styles.currentOption__text}>{text}</span>
      <img className={style} src="/img/sorting.svg" alt="" />
    </div>
  );
};

export default CurrentOption;
