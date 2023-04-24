import { FC } from "react";
import styles from "./searchPanel.module.scss";
import ManufacturerItem from "./ManufacturerItem";
import { useToggle } from "../../../../hooks/useToggle";

export interface IManufacturerListProps {
  manufacturers: string[];
  toggleManufacturers: (value: string) => void;
  manufactureSearch: string;
}

const ManufacturerList: FC<IManufacturerListProps> = ({
  manufacturers,
  toggleManufacturers,
  manufactureSearch,
}) => {
  const [showAll, toggleShowAll] = useToggle(false);

  return (
    <div className={styles.manufacturers}>
      {manufacturers
        .filter((manufacturer) => manufacturer.includes(manufactureSearch))
        .map((manufacturer, index) => {
          if (!showAll && index > 3) {
            return;
          }
          return (
            <ManufacturerItem
              key={manufacturer}
              manufacturer={manufacturer}
              toggleManufacturers={toggleManufacturers}
            />
          );
        })}

      <span onClick={() => toggleShowAll()} className={styles.lookAll}>
        {!showAll ? "Показать все" : "Скрыть все"}
        <img
          className={`${!showAll ? "" : styles.reverse}`}
          src="/img/sorting.svg"
          alt=""
        />
      </span>
    </div>
  );
};

export default ManufacturerList;
