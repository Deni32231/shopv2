import { SortingEnum } from "../components/screens/catalog/Sorting/Sorting";

const options = [
  {
    value: SortingEnum.NAME,
    text: "Название",
  },
  {
    value: SortingEnum.NAME_REVERSE,
    text: "Название",
  },
  {
    value: SortingEnum.PRICE,
    text: "Цена",
  },
  {
    value: SortingEnum.PRICE_REVERSE,
    text: "Цена",
  },
];

export const useOptions = () => {
  return options;
};
