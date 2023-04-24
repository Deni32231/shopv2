import { fireEvent, render, screen } from "@testing-library/react";
import PriceFilter from "./PriceFilter";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const price = { min: 0, max: 10000 };
const mockCallback = jest.fn(() => {});

describe("Price filter", () => {
  test("inputMin change function called one time", () => {
    render(<PriceFilter price={price} setPrice={mockCallback} />);

    const inputMin = screen.getByTestId("inputMin");

    act(() => {
      fireEvent.input(inputMin, {
        target: { value: "200" },
      });
    });

    expect(mockCallback).toBeCalledTimes(1);
  });

  test("inputMax change function called one time", () => {
    render(<PriceFilter price={price} setPrice={mockCallback} />);

    const inputMax = screen.getByTestId("inputMax");

    act(() => {
      fireEvent.input(inputMax, {
        target: { value: "1000" },
      });
    });

    expect(mockCallback).toBeCalledTimes(1);
  });
});
