import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [value: T, setValue: React.Dispatch<any>] => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue && JSON.parse(jsonValue).length !== 0) {
      return JSON.parse(jsonValue);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
