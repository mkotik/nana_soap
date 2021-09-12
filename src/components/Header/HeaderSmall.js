import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link } from "react-router-dom";
import shoppingBag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import threeDots from "../../assets/three-dots.svg";
import ExpandableMenu from "./ExpandableMenu";

function HeaderSmall(props) {
  const [menuClass, setMenuClass] = useState("");

  const toggleOpen = () => {
    if (menuClass === "nav-menu-active") {
      setMenuClass("");
      enableBodyScroll(document);
    } else {
      setMenuClass("nav-menu-active");
      disableBodyScroll(document);
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
            <Link to="/" className="text-decoration-none">
              <h1>Nana's Soaps</h1>
            </Link>
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
      <ExpandableMenu menuClass={menuClass} toggleOpen={toggleOpen} />
    </>
  );
}

export default HeaderSmall;
