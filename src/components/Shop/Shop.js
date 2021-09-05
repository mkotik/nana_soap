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
        <div style={{ width: "100rem", height: "100vh" }}></div>
      </div>
    </div>
  );
}

export default Shop;
