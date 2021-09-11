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
            <h5 className="text-start lead mb-3">
              <span className="ingredientsLabel">Ingredients:</span> Saponified
              100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil,
              Avocado Oil, Shea Butter, Rose Kaolin Clay, Ground Annatto,
              Turmeric, Hibiscus Tea and an Essential Oil Blend of Sweet Orange,
              Lemongrass, Rosemary and Cedarwood.
            </h5>
            <h5 className="price mb-3">$8 / Bar</h5>
            <TraitsBar />
            <QuantityBar />
            <button className="btn btn-lg addCartBtn">$8 | Add To Bag</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
