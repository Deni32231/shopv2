import { SortingEnum } from "../components/screens/catalog/Sorting/Sorting";
import { IProduct } from "../components/shared/product/ProductCard/ProductCard";

export interface ISort {
  sortedType: string;
  selectedTypes: string[];
  manufacturers: string[];
  priceMin: number;
  priceMax: number;
}

export const sortProducts = (params: ISort) => {
  let products = JSON.parse(localStorage.getItem("products") || "");

  products =
    params.selectedTypes?.length !== 0
      ? filterByType(params.selectedTypes, products)
      : products;

  products = filterByPrice(params.priceMin, params.priceMax, products);

  products =
    params.manufacturers.length !== 0
      ? filterByManufacturerSearch(params.manufacturers, products)
      : products;

  products = sortBySortedType(params.sortedType, products);

  return products;
};

export const filterByType = (
  types: string[],
  products: IProduct[]
): IProduct[] => {
  if (types.length === 0) {
    return products;
  }

  const filteredProducts = products.filter((product) => {
    let flag = false;
    types.forEach((type) => {
      if (product.typeOfCare.includes(type)) {
        flag = true;
      }
    });
    return flag;
  });

  return filteredProducts;
};

export const filterByManufacturerSearch = (
  manufacturers: string[],
  products: IProduct[]
): IProduct[] => {
  const filteredProducts = products.filter((product) => {
    let flag = false;
    manufacturers.forEach((manufacturer) => {
      if (product.manufacturer === manufacturer) {
        flag = true;
      }
    });
    return flag;
  });
  return filteredProducts;
};

export const filterByPrice = (
  minPrice: number,
  maxPrice: number,
  products: IProduct[]
): IProduct[] => {
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return filteredProducts;
};

export const sortBySortedType = (
  sortedType: string,
  products: IProduct[]
): IProduct[] => {
  if (sortedType === SortingEnum.PRICE) {
    return products.sort((a, b) => a.price - b.price);
  }

  if (sortedType === SortingEnum.PRICE_REVERSE) {
    return products.sort((a, b) => b.price - a.price);
  }

  if (sortedType === SortingEnum.NAME) {
    return products.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortedType === SortingEnum.NAME_REVERSE) {
    return products.sort((a, b) => b.name.localeCompare(a.name));
  }

  return products;
};
