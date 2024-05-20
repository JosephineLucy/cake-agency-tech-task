import "./styles.scss";
import Header from "./components/header";
import AverageCalculator from "./components/average-calculator";

import { AppConstants } from "./constants/constants";
import ErrorBoundary from "./components/error-boundary";

function App() {
  return (
    <>
      <Header title={AppConstants.title} />
      <ErrorBoundary>
        <AverageCalculator />
      </ErrorBoundary>
    </>
  );
}

export default App;
