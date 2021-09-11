import React from "react";
import smellIcon from "../../../assets/smell.svg";
import scrubIcon from "../../../assets/sponge.svg";

function TraitsBar(props) {
  return (
    <div className="traitsWrap d-flex align-items-center border-top border-bottom py-2">
      <div className="smellWrap me-1">
        <img src={smellIcon} />
      </div>
      <div className="smellsLikeWrap text-start pe-5">
        <h5 className="top">Smells Like:</h5>
        <h5 className="bottom">Lemons</h5>
      </div>
      <div className="scrubWrap me-2">
        <img src={scrubIcon} />
      </div>
      <div className="exfoliationWrap text-start pe-5">
        <h5 className="top">Exfoliation:</h5>
        <h5 className="bottom">Heavy</h5>
      </div>
    </div>
  );
}

export default TraitsBar;
