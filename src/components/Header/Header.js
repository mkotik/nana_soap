import React, { useState } from "react";
import HeaderSmall from "./HeaderSmall";
import ShopBar from "./ShopBar";
import shoppingBag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartOpen } from "../../actions";
import { disableBodyScroll } from "body-scroll-lock";

function Header(props) {
  const [shopBarOpen, setShopBarOpen] = useState(false);
  const clickShop = () => {
    setShopBarOpen(() => !shopBarOpen);
  };

  const handleOpenCart = () => {
    props.toggleCartOpen(true);
    disableBodyScroll(document);
  };
  return (
    <>
      <div className="header py-3">
        <div className="container">
          <div className="logo-container">
            <Link to="/">
              <h1>Nana's Soaps</h1>
            </Link>
          </div>
          <ul>
            <li className="me-2" onClick={clickShop}>
              <a className="text">Shop</a>
            </li>
            <li className="mx-2">
              <a className="text">Our Story</a>
            </li>
            <li className="ms-2">
              <a className="text">Contact Us</a>
            </li>
          </ul>
          <div className="icon-container">
            <div className="img-container me-2">
              <img src={user} />
            </div>
            <div className="img-container ms-2" onClick={handleOpenCart}>
              <img src={shoppingBag} />
            </div>
          </div>
        </div>
      </div>
      <ShopBar shopBarOpen={shopBarOpen} clickShop={clickShop} />

      <HeaderSmall />
    </>
  );
}

export default connect(null, { toggleCartOpen })(Header);
