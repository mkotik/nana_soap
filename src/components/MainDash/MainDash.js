import React from "react";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import "../../styles/MainDash.scss";

function MainDash(props) {
  return (
    <div>
      <Hero />
      <Bestsellers />
    </div>
  );
}

export default MainDash;
