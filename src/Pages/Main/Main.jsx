import React from "react";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Slider />
      </div>
    </>
  );
}
