import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import ErrorBoundary from ".";

describe.only("ErrorBoundary", () => {
  test("given error is thrown by children, renders Error Message component", () => {
    const ErrorComponent: React.FC = () => {
      throw new Error();
    };
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );
    waitFor(() => {
      expect(
        screen.getByRole("heading", { name: " Oops something went wrong!" })
      ).toBeInTheDocument();
    });
  });
  test("given there are no errors, children are rendered", () => {
    render(
      <ErrorBoundary>
        <p>No errors here</p>
      </ErrorBoundary>
    );

    waitFor(() => {
      expect(
        screen.getByRole("paragraph", {
          name: "No errors here",
        })
      ).toBeInTheDocument();
    });
  });
});
