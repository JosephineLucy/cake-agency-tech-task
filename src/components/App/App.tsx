import "./styles.scss";
import "../../styles.scss";
import AverageCalculator from "../AverageCalculator";
import ErrorBoundary from "../ErrorBoundary";

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
