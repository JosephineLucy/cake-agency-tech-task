import "./styles.scss";
import AverageCalculator from "./components/AverageCalculator";

import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <AverageCalculator />
      </ErrorBoundary>
    </div>
  );
}

export default App;
