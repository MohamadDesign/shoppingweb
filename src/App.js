import "./App.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Why from "./Components/Why/Why";
import Arrival from "./Components/Arrival/Arrival";
import Product from "./Components/Products/Products";
import Subscribe from "./Components/Subscribe/Subscribe";
import Client from "./Components/Client/Client";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="hero-area">
        <Header />
        <Slider />
        <Why />
        <Arrival />
        <Product />
        <Subscribe />
        <Client />
        <Footer />
      </div>
    </>
  );
}

export default App;
