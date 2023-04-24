import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductBuy from "./ProductBuy";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

const product = {
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

describe("ProductBuy", () => {
  test("default render", () => {
    render(<ProductBuy product={product} />);

    mockDispatch.mockReturnValue({});

    const price = screen.getByTestId("price");

    expect(price).toHaveTextContent(`${product.price}`);
  });
});
