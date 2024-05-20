import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import AverageCalculator from ".";

describe("AverageCalculator", () => {
  render(<AverageCalculator />);
  test("renders AverageValue component", () => {
    waitFor(() => {
      const averageValue = screen.getByRole("paragraph", {
        name: "Click the button below to get order average!",
      });

      expect(averageValue).toBeInTheDocument();
    });
  });

  test("renders button element", () => {
    waitFor(() => {
      const button = screen.getByRole("button", {
        name: "Fetch an order average",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
