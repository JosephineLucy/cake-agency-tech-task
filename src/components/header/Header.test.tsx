import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  test("when given title, renders heading with correct title", () => {
    render(<Header title="test title" />);

    const heading = screen.getByRole("heading", { name: "test title" });

    expect(heading).toBeInTheDocument();
  });
});
