import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import AverageValueDisplay from ".";

describe.only("AverageValueDisplay", () => {
  test("given a truthy value, the correct message is displayed", () => {
    const value = "an average number";

    render(<AverageValueDisplay value={value} />);
    waitFor(() => {
      const displayMessage = screen.getByRole("paragraph", {
        name: `Average Order Value = £ ${value}`,
      });

      expect(displayMessage).toBeInTheDocument();
    });
  });
  test("given a truthy value, the correct message is displayed", () => {
    render(<AverageValueDisplay value="" />);
    waitFor(() => {
      const displayMessage = screen.getByRole("paragraph", {
        name: "Click the button below to get order average!",
      });

      expect(displayMessage).toBeInTheDocument();
    });
  });
});
