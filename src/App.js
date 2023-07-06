import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Slider from "./Components/Slider/Slider";

function App() {
  const allRoutes = useRoutes(routes);
  return (
    <>
      <Header />
      <Slider />
      {allRoutes}
      <Footer />
    </>
  );
}

export default App;
