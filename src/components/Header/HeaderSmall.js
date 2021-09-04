import React, { useState } from "react";
import shoppingBag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import threeDots from "../../assets/three-dots.svg";
import ExpandableMenu from "./ExpandableMenu";

function HeaderSmall(props) {
  const [menuClass, setMenuClass] = useState("");

  const toggleOpen = () => {
    if (menuClass === "nav-menu-active") {
      setMenuClass("");
    } else {
      setMenuClass("nav-menu-active");
    }
  };
  return (
    <>
      <div className="header-small py-3">
        <div className="container">
          <div className="expander-wrap" onClick={toggleOpen}>
            <img src={threeDots} />
          </div>
          <div className="logo-container">
            <h1>Nana's Soaps</h1>
          </div>
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
      <ExpandableMenu menuClass={menuClass} />
    </>
  );
}

export default HeaderSmall;
