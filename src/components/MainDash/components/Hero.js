import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div className="hero-wrap-wrap">
      <div className="hero-wrap">
        <div className="text-wrap">
          <h1 class="hero-text">All Natural Handmade Soaps</h1>
          <Link to="/shop">
            <button className="btn btn-light shopBtn btn-lg">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
