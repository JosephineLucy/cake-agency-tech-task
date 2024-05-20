import "./styles.scss";
import Header from "./components/Header";
import AverageCalculator from "./components/AverageCalculator";

import { AppConstants } from "./constants/constants";
import ErrorBoundary from "./components/ErrorBoundary";

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
