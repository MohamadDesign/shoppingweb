import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Slider from "./Components/Slider/Slider";
import Main from "./Pages/Main/Main";

function App() {
  const allRoutes = useRoutes(routes);
  return (
    <>
      <Main />
      {allRoutes}
      <Footer />
    </>
  );
}

export default App;
