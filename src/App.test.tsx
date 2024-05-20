import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders AverageCalculator component", () => {
    render(<App />);

    const averageCalculator = screen.getByRole("main");

    expect(averageCalculator).toBeInTheDocument();
  });
});
