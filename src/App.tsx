import "./styles.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import AverageCalculator from "./components/average-calculator";

import { appConstants } from "./constants/constants";

function App() {
  return (
    <>
      <Header title={appConstants.title} />
      <AverageCalculator />
      <Footer title={appConstants.title} />
    </>
  );
}

export default App;
