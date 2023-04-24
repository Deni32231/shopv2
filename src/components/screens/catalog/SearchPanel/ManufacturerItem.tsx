import React, { FC } from "react";
import styles from "./searchPanel.module.scss";

export interface IManufacturerItemProps {
  manufacturer: string;
  toggleManufacturers: (str: string) => void;
}

const ManufacturerItem: FC<IManufacturerItemProps> = ({
  manufacturer,
  toggleManufacturers,
}) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        value={manufacturer}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          toggleManufacturers(e.target.value)
        }
      />
      {manufacturer}
    </label>
  );
};

export default ManufacturerItem;
