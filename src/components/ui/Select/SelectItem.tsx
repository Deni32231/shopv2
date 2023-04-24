import React, { FC } from "react";
import styles from "./select.module.scss";
import { SortingEnum } from "../../screens/catalog/Sorting/Sorting";

export interface ISelectItemProps {
  text: string;
  value: string;
  toggleShowOptions: () => void;
  setSelectedOption: (obj: { text: string; value: string }) => void;
}

const SelectItem: FC<ISelectItemProps> = ({
  toggleShowOptions,
  setSelectedOption,
  text,
  value,
}) => {
  return (
    <span
      className={styles.options}
      onClick={() => {
        toggleShowOptions();
        setSelectedOption({ value, text });
      }}
      data-value={value}
      key={value}
    >
      {text}
      <img
        className={`${
          value === SortingEnum.NAME_REVERSE ||
          value === SortingEnum.PRICE_REVERSE
            ? ""
            : styles.reverse
        }`}
        src="/img/sorting.svg"
        alt=""
      />
    </span>
  );
};

export default SelectItem;
