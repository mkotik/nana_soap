import React, { useState } from "react";
import ExpandableShopBar from "./ExpandableShopBar";
import chevronRight from "../../assets/chevron-right.svg";
import chevronDown from "../../assets/chevron-down.svg";

function ExpandableMenu(props) {
  const { setMenuClass } = props;
  const [shopBarOpen, setShopBarOpen] = useState(false);
  const handleShop = () => {
    setShopBarOpen(() => !shopBarOpen);
  };
  return (
    <div className={`nav-menu ${props.menuClass}`}>
      <div className="container">
        <ul className="container">
          <li className="first-item d-flex flex-column" onClick={handleShop}>
            <div className="d-flex justify-content-between">
              <a>Shop</a>
              <img src={shopBarOpen ? chevronDown : chevronRight} />
            </div>
            <ExpandableShopBar
              shopBarOpen={shopBarOpen}
              setMenuClass={setMenuClass}
            />
          </li>
          <li>
            <a>Our Story</a>
            <img src={chevronRight} />
          </li>
          <li>
            <a>Contact Us</a>
            <img src={chevronRight} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpandableMenu;
