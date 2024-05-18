import "./styles.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Average from "./components/average";
import { appConstants } from "./constants/constants";

function App() {
  return (
    <>
      <Header title={appConstants.title} />
      <Average />
      <Footer title={appConstants.title} />
    </>
  );
}

export default App;
