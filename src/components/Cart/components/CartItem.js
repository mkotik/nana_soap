import React from "react";
import soapImg from "../../../assets/soap-item.png";
import remove from "../../../assets/remove.svg";
import plus from "../../../assets/plus.svg";
import minus from "../../../assets/minus.svg";

function cartItem(props) {
  return (
    <div className="cartItem">
      <div className="imgWrap">
        <img src={soapImg} />
      </div>
      <div className="itemMid">
        <h5>Lemongrass</h5>
        <div className="quantityWrap">
          <div className="minusWrap">
            <img src={minus} />
          </div>
          <div className="quantityNumberWrap">
            <p className="quantity">1</p>
          </div>
          <div className="plusWrap">
            <img src={plus} />
          </div>
        </div>
      </div>
      <div className="itemRight">
        <div className="removeWrap">
          <img src={remove} />
        </div>
        <h5 className="totalPrice">$8.00</h5>
      </div>
    </div>
  );
}

export default cartItem;
