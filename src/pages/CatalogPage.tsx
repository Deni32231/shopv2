import React from "react";
import Catalog from "../components/screens/catalog/Catalog";
import NavigationPage from "../components/shared/navigationPage/NavigationPage";

const CatalogPage = () => {
  return (
    <>
      <NavigationPage elements={["Косметика и гигиена"]} />
      <Catalog />
    </>
  );
};

export default CatalogPage;
