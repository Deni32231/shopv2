import React from "react";
import NavigationPage from "../components/shared/navigationPage/NavigationPage";
import Basket from "../components/screens/basket/Basket";

const BasketPage = () => {
  return (
    <>
      <NavigationPage elements={["Корзина"]} />
      <Basket />
    </>
  );
};

export default BasketPage;
