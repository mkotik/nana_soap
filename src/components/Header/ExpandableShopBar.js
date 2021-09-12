import React from "react";
import { Link } from "react-router-dom";

function ExpandableShopBar(props) {
  const { shopBarOpen, toggleOpen } = props;
  return (
    <div className={`expandableShopBar ${shopBarOpen ? "shopBarOpen" : ""}`}>
      <Link to="/shop">
        <a onClick={toggleOpen}>Full Catalog</a>
      </Link>
      <Link to="/shop">
        <a onClick={toggleOpen}>Body Bars</a>
      </Link>
      <Link to="/shop">
        <a onClick={toggleOpen}>Face Bars</a>
      </Link>
      <Link to="/shop">
        <a onClick={toggleOpen}>For Babies</a>
      </Link>
      <Link to="/shop">
        <a onClick={toggleOpen}>Gift Boxes</a>
      </Link>
    </div>
  );
}

export default ExpandableShopBar;
