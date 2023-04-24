import { FC } from "react";
import styles from "./searchPanel.module.scss";
import TypesItem from "./TypesItem";

export interface ITypesFilterProps {
  types: string[];
  selectType: (type: string) => void;
  selectedTypes: string[];
}

const TypesFilter: FC<ITypesFilterProps> = ({
  types,
  selectType,
  selectedTypes,
}) => {
  return (
    <div className={styles.types}>
      {types.map((type) => (
        <TypesItem
          key={type}
          type={type}
          selectType={selectType}
          selectedTypes={selectedTypes}
        />
      ))}
    </div>
  );
};

export default TypesFilter;
