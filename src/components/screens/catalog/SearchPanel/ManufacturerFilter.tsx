import React, { FC, useState } from "react";
import styles from "./searchPanel.module.scss";
import SearchForm from "../../../shared/searchForm/SearchForm";
import ManufacturerList from "./ManufacturerList";

export interface IManufacturerFilterProps {
  manufacturers: string[];
  toggleManufacturers: (value: string) => void;
}

const ManufacturerFilter: FC<IManufacturerFilterProps> = ({
  manufacturers,
  toggleManufacturers,
}) => {
  const [manufactureSearch, setManufacturerSearch] = useState("");

  const searchHandler = (value: string) => {
    setManufacturerSearch(value);
  };

  return (
    <div className={styles.manufacturer}>
      <span className={styles.manufacturer_title}>Производитель</span>
      <SearchForm callBack={searchHandler} />
      <ManufacturerList
        manufacturers={manufacturers}
        toggleManufacturers={toggleManufacturers}
        manufactureSearch={manufactureSearch}
      />
    </div>
  );
};

export default ManufacturerFilter;
