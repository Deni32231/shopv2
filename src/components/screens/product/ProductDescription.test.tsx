import { render, screen } from "@testing-library/react";
import ProductDescription from "./ProductDescription";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("product description", () => {
  test("drop down is hidden", () => {
    render(<ProductDescription description="test" />);

    const dropDown = screen.getByTestId("dropDown");

    expect(dropDown).not.toBeVisible;
  });

  test("drop down is visible after click", () => {
    render(<ProductDescription description="test" />);

    const btnToggle = screen.getByTestId("btnToggle");
    const dropDown = screen.getByTestId("dropDown");

    act(() => {
      userEvent.click(btnToggle);
    });

    expect(dropDown).toBeVisible;
  });
});
