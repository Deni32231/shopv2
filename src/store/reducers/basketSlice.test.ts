import { Action, AnyAction } from "@reduxjs/toolkit";
import basketReducer, {
  addItem,
  removeItem,
  IBusketState,
} from "./basketSlice";
import { IProduct } from "../../components/shared/product/ProductCard/ProductCard";

const initialState: IBusketState = {
  items: [],
  priceAllItems: 0,
  countAllItems: 0,
};

const product: IProduct = {
  urlImg: "/img/product1.png",
  name: "Ср-во для мытья посуды Апельсин+мята",
  sizeType: "bottle",
  size: "450 мл",
  barcode: 146045404909,
  manufacturer: "Нэфис1",
  brand: "AOS",
  description:
    "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
  price: 1301,
  typeOfCare: [
    "Уход за руками",
    "Уход за руками",
    "Уход за ногами",
    "Средства для бритья",
  ],
};

const stateHasOneProduct: IBusketState = {
  items: [{ product, count: 1 }],
  priceAllItems: product.price,
  countAllItems: 1,
};

const stateHasTwoProduct: IBusketState = {
  items: [{ product, count: 2 }],
  priceAllItems: product.price * 2,
  countAllItems: 2,
};

describe("basketSlice", () => {
  test("return default state", () => {
    const result = basketReducer(undefined, { type: "" });

    expect(result).toEqual(initialState);
  });

  test("addItem to empty state", () => {
    const action: AnyAction = { type: addItem.type, payload: product };
    const result = basketReducer(initialState, action);

    expect(result).toEqual(stateHasOneProduct);
  });

  test("addItem to state where it is", () => {
    const action: AnyAction = { type: addItem.type, payload: product };
    const result = basketReducer(stateHasOneProduct, action);

    expect(result).toEqual(stateHasTwoProduct);
  });

  test("removeItem to empty state", () => {
    const action: AnyAction = { type: removeItem.type, payload: product };
    const result = basketReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  test("removeItem to state where it is in count 1", () => {
    const action: AnyAction = { type: removeItem.type, payload: product };
    const result = basketReducer(stateHasOneProduct, action);

    expect(result).toEqual(initialState);
  });

  test("removeItem to state where it is in count 2", () => {
    const action: AnyAction = { type: removeItem.type, payload: product };
    const result = basketReducer(stateHasTwoProduct, action);

    expect(result).toEqual(stateHasOneProduct);
  });
});
