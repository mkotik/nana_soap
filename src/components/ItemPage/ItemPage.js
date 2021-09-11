import React from "react";
import TraitsBar from "./components/TraitsBar";
import QuantityBar from "./components/QuantityBar";

import "../../styles/ItemPage.scss";
import soapImg from "../../assets/soap-item.png";

function ItemPage(props) {
  return (
    <div className="py-5 itemPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start">
          <div className="imgWrap border">
            <img src={soapImg} />
          </div>
          <div className="textContent d-flex flex-column align-items-start justify-content-start">
            <h1>Lemongrass</h1>
            <h5 className="text-start">
              Ingredients: Cocoa Butter, Bergamot, Rosemary, Palm Oil{" "}
            </h5>
            <h5 className="price">$8 / Bar</h5>
            <TraitsBar />
            <QuantityBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
