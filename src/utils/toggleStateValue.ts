export const toggleStateValue = <T>(
  value: T,
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>
): void => {
  if (state.find((item) => item === value)) {
    setState([...state].filter((item) => item !== value));
  } else {
    setState([...state, value]);
  }
};
