import { FC } from "react";
import styles from "./searchPanel.module.scss";
import PriceFilter from "./PriceFilter";
import ManufacturerFilter from "./ManufacturerFilter";
import TypesFilter from "./TypesFilter";

interface SearchPanelProps {
  types: string[];
  manufacturers: string[];
  selectedTypes: string[];
  selectType: (type: string) => void;
  toggleManufacturers: (value: string) => void;
  price: { min: number; max: number };
  setPrice: (value: { min: number; max: number }) => void;
  resetManufacturers: () => void;
}

const SearchPanel: FC<SearchPanelProps> = ({
  types,
  manufacturers,
  selectedTypes,
  selectType,
  toggleManufacturers,
  setPrice,
  price,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</span>
      <PriceFilter setPrice={setPrice} price={price} />
      <ManufacturerFilter
        manufacturers={manufacturers}
        toggleManufacturers={toggleManufacturers}
      />
      <TypesFilter
        types={types}
        selectType={selectType}
        selectedTypes={selectedTypes}
      />
    </div>
  );
};

export default SearchPanel;
