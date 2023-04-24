import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import * as reduxHooks from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelector,
}));

const mockSelector = jest.fn();

describe("Layout", () => {
  mockSelector.mockReturnValue({});

  test("layout has header", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument;
  });

  test("layout has footer", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument;
  });
});
