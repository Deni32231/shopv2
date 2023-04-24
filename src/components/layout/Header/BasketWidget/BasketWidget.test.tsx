import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BasketWidget from "./BasketWidget";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelector,
}));

const mockSelector = jest.fn();

describe("basketWidget", () => {
  mockSelector.mockReturnValue({});

  test("has link to basket", () => {
    render(
      <MemoryRouter>
        <BasketWidget />
      </MemoryRouter>
    );

    const basketLink = screen.getByTestId("basketLink");

    act(() => {
      userEvent.click(basketLink);
    });

    expect(screen.getByText(/Корзина/i));
  });
});
