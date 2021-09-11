import React from "react";
import { Link } from "react-router-dom";

function ExpandableShopBar(props) {
  const { shopBarOpen, setMenuClass } = props;
  return (
    <div className={`expandableShopBar ${shopBarOpen ? "shopBarOpen" : ""}`}>
      <Link to="/shop">
        <a onClick={setMenuClass}>Full Catalog</a>
      </Link>
      <Link to="/shop">
        <a onClick={setMenuClass}>Body Bars</a>
      </Link>
      <Link to="/shop">
        <a onClick={setMenuClass}>Face Bars</a>
      </Link>
      <Link to="/shop">
        <a onClick={setMenuClass}>For Babies</a>
      </Link>
      <Link to="/shop">
        <a onClick={setMenuClass}>Gift Boxes</a>
      </Link>
    </div>
  );
}

export default ExpandableShopBar;
