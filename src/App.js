import React from "react";
import { Header, MainDash } from "./components";
import "./styles/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDash />
    </div>
  );
}

export default App;
