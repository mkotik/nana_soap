import React from "react";
import ShopHeader from "./components/ShopHeader";
import SidePanel from "./components/SidePanel";
import Products from "./components/Products";
import "../../styles/Shop.scss";

function Shop(props) {
  return (
    <div>
      <ShopHeader />
      <div className="d-flex justify-content-between container">
        <SidePanel />
        <Products />
        {/* <div style={{ width: "100rem", height: "100vh" }}></div> */}
      </div>
    </div>
  );
}

export default Shop;
