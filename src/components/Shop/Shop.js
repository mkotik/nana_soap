import React from "react";
import ShopHeader from "./components/ShopHeader";
import SidePanel from "./components/SidePanel";
import "../../styles/Shop.scss";

function Shop(props) {
  return (
    <div>
      <ShopHeader />
      <div className="d-flex justify-content-between container">
        <SidePanel />
        <div
          style={{ width: "60rem", height: "100vh", backgroundColor: "red" }}
        ></div>
      </div>
    </div>
  );
}

export default Shop;
