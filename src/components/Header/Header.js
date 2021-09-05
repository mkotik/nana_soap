import React from "react";
import HeaderSmall from "./HeaderSmall";
import shoppingBag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import { Link } from "react-router-dom";

function Header(props) {
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
            <li className="me-2">
              <Link to="/shop">
                <a className="text">Shop</a>
              </Link>
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
            <div className="img-container ms-2">
              <img src={shoppingBag} />
            </div>
          </div>
        </div>
      </div>
      <HeaderSmall />
    </>
  );
}

export default Header;
