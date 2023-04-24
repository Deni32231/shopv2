import React from "react";

import AdminPage from "../pages/AdminPage";
import BasketPage from "../pages/BasketPage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  ADMIN = "/admin",
  BASKET = "/basket",
  CATALOG = "/catalog",
  PRODUCT = "/product/:id",
}

export const routes: IRoute[] = [
  { path: RouteNames.ADMIN, element: AdminPage },
  { path: RouteNames.BASKET, element: BasketPage },
  { path: RouteNames.CATALOG, element: CatalogPage },
  { path: RouteNames.PRODUCT, element: ProductPage },
];
