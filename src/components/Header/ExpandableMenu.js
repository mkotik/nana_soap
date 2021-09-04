import React, { useState } from "react";
import chevronRight from "../../assets/chevron-right.svg";

function ExpandableMenu(props) {
  return (
    <div className={`nav-menu ${props.menuClass}`}>
      <div className="container">
        <ul className="container">
          <li className="first-item">
            <a>Shop</a>
            <img src={chevronRight} />
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
