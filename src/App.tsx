import "./styles.scss";
import Header from "./components/header";
import AverageCalculator from "./components/average-calculator";

import { appConstants } from "./constants/constants";
import ErrorBoundary from "./components/error-boundary";

function App() {
  return (
    <>
      <Header title={appConstants.title} />
      <ErrorBoundary>
        <AverageCalculator />
      </ErrorBoundary>
    </>
  );
}

export default App;
