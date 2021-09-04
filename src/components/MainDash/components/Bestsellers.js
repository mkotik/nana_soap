import React from "react";
import ItemCard from "./ItemCard.js";

function Bestsellers(props) {
  return (
    <div className="bestsellers py-5">
      <div className="container">
        <div>
          <h1 className="bestsellers-header">Explore our Bestsellers</h1>
          <div className="content">
            <div className="cards-wrap">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
