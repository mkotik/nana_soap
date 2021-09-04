import React from "react";

function MessageBlock(props) {
  return (
    <div className="messageBlock">
      <div className="container">
        <div className="textBox">
          <h1 className="m-0 mb-5">
            We stand for <span>Sustainability</span>
          </h1>
          <h1 className="m-0 mt-5">
            Our ingredients are sourced naturally and ethically in the United
            States.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MessageBlock;
