import React, { useState } from "react";
import ShopHeader from "./components/ShopHeader";
import SidePanel from "./components/SidePanel";
import Products from "./components/Products";
import sliders from "../../assets/sliders.svg";
import "../../styles/Shop.scss";

function Shop(props) {
  const [filterBarActive, setFilterBarActive] = useState(false);

  const handleFilterBtn = () => {
    setFilterBarActive(() => !filterBarActive);
  };

  return (
    <div className="shop">
      <ShopHeader />
      <div className="d-flex container">
        <div className="sliderBtn" onClick={handleFilterBtn}>
          <img src={sliders} />
        </div>
      </div>
      <div className="container mainContentWrap">
        <SidePanel filterBarActive={filterBarActive} />
        <Products />
        {/* <div style={{ width: "100rem", height: "100vh" }}></div> */}
      </div>
    </div>
  );
}

export default Shop;
