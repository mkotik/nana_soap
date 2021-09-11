import React, { useState } from "react";
import chevronDown from "../../../assets/chevron-down.svg";
import chevronUp from "../../../assets/chevron-up.svg";

function SidePanelItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, options } = props;

  const handleOpen = () => {
    setIsOpen(() => !isOpen);
  };
  return (
    <div className="mb-2">
      <div className="d-flex itemTitle" onClick={handleOpen}>
        <img src={isOpen ? chevronUp : chevronDown} className="pb-1" />
        <h5 className="ms-2">{title}</h5>
      </div>
      <form className={`sidePanel-menu  ${isOpen ? "active" : ""}`}>
        {options.map((option) => {
          return (
            <label className=" d-flex align-items-center ">
              <input type="checkbox" className="me-2" />
              {option}
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default SidePanelItem;
