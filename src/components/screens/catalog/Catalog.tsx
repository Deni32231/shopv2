import { useEffect, useState } from "react";
import Sorting from "./Sorting/Sorting";
import { IProduct } from "../../shared/product/ProductCard/ProductCard";
import { sortProducts } from "../../../utils";
import NavigationPage from "../../shared/navigationPage/NavigationPage";
import Title from "../../shared/title/Title";
import ProductsTypes from "./ProductsTypes/ProductsTypes";
import SearchPanel from "./SearchPanel/SearchPanel";
import ProductList from "../../shared/product/ProductList/ProductList";
import styles from "./catalog.module.scss";
import { useManufacturers } from "../../../hooks/useManufacturers";
import { useOptions } from "../../../hooks/useOptions";
import { useProductsTypes } from "../../../hooks/useProductsTypes";
import { toggleStateValue } from "../../../utils/toggleStateValue";
import Pagination from "../../shared/pagination/Pagination";
import productsData from "../../../data/products.json";

const Catalog = () => {
  const options = useOptions();
  const manufacturersList = useManufacturers();
  const productsTypes = useProductsTypes();

  const [products, setProducts] = useState(() => {
    const jsonProducts = localStorage.getItem("products");
    if (jsonProducts) {
      return JSON.parse(jsonProducts);
    }
    return productsData;
  });
  const [sortedType, setSortedType] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([] as string[]);
  const [manufacturers, setManufacturers] = useState([] as string[]);
  const [price, setPrice] = useState({ min: 0, max: 10000 });
  const [indexPage, setIndexPage] = useState(1);
  const [pageProducts, setPageProducts] = useState<IProduct[]>([]);
  const [countPages, setCountPages] = useState(1);

  const getPageProducts = (indexPage: number, products: IProduct[]) => {
    const pageProducts = products.filter(
      (product, index) => index < indexPage * 9 && index >= (indexPage - 1) * 9
    );

    return pageProducts;
  };

  useEffect(() => {
    setCountPages(Math.ceil(products.length / 9));
  }, [products]);

  useEffect(() => {
    setPageProducts(getPageProducts(indexPage, products));
  }, [products, indexPage]);

  const toggleSelectedTypes = (type: string) => {
    toggleStateValue(type, selectedTypes, setSelectedTypes);
  };

  const toggleManufacturers = (manufacturer: string) => {
    toggleStateValue(manufacturer, manufacturers, setManufacturers);
  };

  const resetManufacturers = () => {
    setManufacturers([]);
  };

  useEffect(() => {
    setProducts(
      sortProducts({
        selectedTypes,
        sortedType,
        manufacturers,
        priceMax: price.max,
        priceMin: price.min,
      })
    );
    setIndexPage(1);
  }, [sortedType, selectedTypes, manufacturers, price.max, price.min]);

  return (
    <div>
      <Title title="Косметика и гигиена">
        <Sorting options={options} callBack={setSortedType} />
      </Title>
      <ProductsTypes
        selectedTypes={selectedTypes}
        types={productsTypes}
        onClick={toggleSelectedTypes}
      />
      <div className={styles.flex}>
        <SearchPanel
          types={productsTypes}
          manufacturers={manufacturersList}
          selectedTypes={selectedTypes}
          selectType={toggleSelectedTypes}
          toggleManufacturers={toggleManufacturers}
          price={price}
          setPrice={(value) => setPrice(value)}
          resetManufacturers={resetManufacturers}
        />
        <div>
          <ProductList products={pageProducts} />
          <Pagination
            countPages={countPages}
            indexPage={indexPage}
            setIndexPage={(val) => setIndexPage(val)}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
