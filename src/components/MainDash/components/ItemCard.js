import React from "react";
import soapImg from "../../../assets/soap-item.png";

function ItemCard(props) {
  return (
    <div className="itemCard">
      <div className="img-wrap card img-fluid ">
        <img src={soapImg} className="img-fluid" />
      </div>
      <div className="text-wrap">
        <span className="title mt-1">Springtime Spice</span>
        <span className="price mt-1">$9.99</span>
        <button className="addBtn btn btn-dark mt-2 ">Add to Bag</button>
      </div>
    </div>
  );
}

export default ItemCard;
