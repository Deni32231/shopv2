import { render, screen } from "@testing-library/react";
import Button from "./Button";
import styles from "./button.module.scss";
import "@testing-library/jest-dom";

describe("button", () => {
  test("button have className button", () => {
    render(<Button />);
    const btn = screen.getByTestId("btn");

    expect(btn).toHaveClass(styles.button);
  });
});
