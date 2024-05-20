import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { AppConstants } from "./constants/constants";

describe("App", () => {
  test("renders Header component", () => {
    render(<App />);

    const header = screen.getByRole("heading", { name: AppConstants.title });

    expect(header).toBeInTheDocument();
  });
  test("renders AverageCalculator component", () => {
    render(<App />);

    const averageCalculator = screen.getByRole("main");

    expect(averageCalculator).toBeInTheDocument();
  });
});
