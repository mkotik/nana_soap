import React from "react";
import { Link } from "react-router-dom";

function ShopBar(props) {
  const { shopBarOpen, clickShop } = props;
  return (
    <div className="header shopBarWrap shopBar">
      <div className="container">
        <div
          className={`shopBar ${
            shopBarOpen ? "shopBarOpen " : "shopBarClosed"
          }`}
        >
          <li className="me-2" onClick={clickShop}>
            <Link to="/shop">
              <a className="text">Full Catalog</a>
            </Link>
          </li>
          <li className="me-2" onClick={clickShop}>
            <Link to="/shop">
              <a className="text">Body Bars</a>
            </Link>
          </li>
          <li className="me-2" onClick={clickShop}>
            <Link to="/shop">
              <a className="text">Face Bars</a>
            </Link>
          </li>
          <li className="me-2" onClick={clickShop}>
            <Link to="/shop">
              <a className="text">For Babies</a>
            </Link>
          </li>
          <li className="me-2" onClick={clickShop}>
            <Link to="/shop">
              <a className="text">Gift Boxes</a>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default ShopBar;
