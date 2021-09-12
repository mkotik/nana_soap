import React from "react";
import { Header, MainDash, Shop, ItemPage, Cart } from "./components";
import "./styles/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainDash />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/shop/item">
          <ItemPage />
        </Route>
      </Switch>
      {/* <Cart /> */}
    </div>
  );
}

export default App;
