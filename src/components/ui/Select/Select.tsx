import React, { FC, useEffect, useState } from "react";
import styles from "./select.module.scss";
import SelectItem from "./SelectItem";
import { useToggle } from "../../../hooks/useToggle";
import CurrentOption from "./CurrentOption";

type Option = { value: string; text: string };

interface SelectProps {
  options: Option[];
  callBack: (str: string) => void;
}

const Select: FC<SelectProps> = ({ options, callBack }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [showOptions, toggleShowOptions] = useToggle(false);

  useEffect(() => {
    callBack(selectedOption.value);
  }, [selectedOption]);

  return (
    <div className={styles.wrapper}>
      <CurrentOption
        text={selectedOption.text}
        value={selectedOption.value}
        toggleShowOptions={() => toggleShowOptions()}
      />
      <div
        className={`${styles.options__wrapper} ${
          !showOptions ? styles.hidden : ""
        }`}
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            text={option.text}
            value={option.value}
            toggleShowOptions={() => toggleShowOptions()}
            setSelectedOption={(val) => setSelectedOption(val)}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;
