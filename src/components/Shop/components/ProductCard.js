import React from "react";
import soapImg from "../../../assets/soap-item.png";
import bagAdd from "../../../assets/bag-add.svg";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="itemCard p-1">
      <div className="itemWrap">
        <Link to="/shop/item">
          <div className="imgWrap border rounded">
            <img src={soapImg} className="img-fluid" />
          </div>
        </Link>
        <div className="textWrap rounded">
          <Link to="/shop/item" className="text-decoration-none">
            <h5 className="name">Lemongrass</h5>
            <h5 className="price">$8.00</h5>
          </Link>
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
