import { FC } from "react";
import styles from "./searchPanel.module.scss";

export interface ITypesItemProps {
  type: string;
  selectType: (val: string) => void;
  selectedTypes: string[];
}

const TypesItem: FC<ITypesItemProps> = ({
  selectType,
  type,
  selectedTypes,
}) => {
  const isActiveType = (type: string): boolean => {
    return !!selectedTypes.find((selectedType) => selectedType === type);
  };

  return (
    <p
      onClick={() => selectType(type)}
      key={type}
      className={`${styles.type} ${isActiveType(type) && styles.active}`}
    >
      {type}
    </p>
  );
};

export default TypesItem;
