import { useState } from "react";

export const useToggle = (
  initialValue: boolean
): [value: boolean, toggleValue: () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
};
