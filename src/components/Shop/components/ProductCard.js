import React from "react";
import soapImg from "../../../assets/soap-item.png";
import bagAdd from "../../../assets/bag-add.svg";

function ProductCard(props) {
  return (
    <div className="itemCard p-1">
      <div className="itemWrap">
        <div className="imgWrap border rounded">
          <img src={soapImg} className="img-fluid" />
        </div>
        <div className="textWrap rounded">
          <h5 className="name">Lemongrass</h5>
          <h5 className="price">$8.00</h5>
          <div className="d-flex justify-content-center addToBagWrap">
            <h5 className="me-2 addText">Add To Bag</h5>
            <img src={bagAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
