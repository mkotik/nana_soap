import React, { useState, useRef, useEffect } from "react";
import "../../styles/Cart.scss";
import { connect } from "react-redux";
import { toggleCartOpen } from "../../actions";
import { enableBodyScroll } from "body-scroll-lock";
import CartItem from "./components/CartItem";

function Cart(props) {
  let cartWrap = useRef(null);
  const handleCloseCart = () => {
    props.toggleCartOpen(false);
    enableBodyScroll(document);
  };

  useEffect(() => {
    cartWrap.classList.add("cartOpen");
  }, []);

  return (
    <div className="cartPageWrap">
      <div className="blankSpace" onClick={handleCloseCart}></div>
      <div
        className="cartWrap"
        ref={(el) => {
          cartWrap = el;
        }}
      >
        <div className="cartHeader">
          <h1>My Bag</h1>
          <h5 onClick={handleCloseCart}>CLOSE</h5>
        </div>
        <div className="cartBody">
          {/* <p className="mt-3">This bag is currently empty</p> */}
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default connect(null, { toggleCartOpen })(Cart);
