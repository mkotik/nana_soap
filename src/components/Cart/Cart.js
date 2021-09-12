import React, { useState } from "react";
import "../../styles/Cart.scss";

function Cart(props) {
  return (
    <div className="cartPageWrap">
      <div className="cartWrap">
        <div className="cartHeader">
          <h1>My Bag</h1>
          <h5>CLOSE</h5>
        </div>
        <div className="cartBody">
          <p className="mt-3">This bag is currently empty</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
