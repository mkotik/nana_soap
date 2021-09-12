import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link } from "react-router-dom";
import shoppingBag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import threeDots from "../../assets/three-dots.svg";
import ExpandableMenu from "./ExpandableMenu";
import { connect } from "react-redux";
import { toggleCartOpen } from "../../actions";

function HeaderSmall(props) {
  const [menuClass, setMenuClass] = useState("");

  const toggleOpen = (props) => {
    if (menuClass === "nav-menu-active") {
      setMenuClass("");
      enableBodyScroll(document);
    } else {
      setMenuClass("nav-menu-active");
      disableBodyScroll(document);
    }
  };

  const handleOpenCart = () => {
    props.toggleCartOpen(true);
    disableBodyScroll(document);
  };
  console.log(props);
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
            <Link to="/login">
              <div className="img-container me-2">
                <img src={user} />
              </div>
            </Link>
            <div className="img-container ms-2" onClick={handleOpenCart}>
              <img src={shoppingBag} />
            </div>
          </div>
        </div>
      </div>
      <ExpandableMenu menuClass={menuClass} toggleOpen={toggleOpen} />
    </>
  );
}

export default connect(null, { toggleCartOpen })(HeaderSmall);
