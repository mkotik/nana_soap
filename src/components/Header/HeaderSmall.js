import React from "react";
import shoppingBag from "../../assets/bag.svg"
import user from "../../assets/user.svg"
import threeDots from "../../assets/three-dots.svg"
import chevronRight from "../../assets/chevron-right.svg"
import {CSSTransition} from 'react-transition-group'

function HeaderSmall(props) {
  return (
      <>
    <div className="header-small py-3">
      <div className="container">
        <div className="expander-wrap">
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
    <CSSTransition>
     <div className="nav-menu">
         <div className="container">
     <ul className="container">
         <li className="first-item">
           <a>Shop</a>
           <img src={chevronRight} />
         </li>
         <li >
           <a>Our Story</a>
           <img src={chevronRight} />
         </li>
         <li>
           <a >Contact Us</a>
           <img src={chevronRight} />
         </li>
       </ul>
       </div>
     </div>
     </CSSTransition>
     </>
  );
}

export default HeaderSmall;