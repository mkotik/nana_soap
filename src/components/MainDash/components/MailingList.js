import React from "react";

function MailingList(props) {
  return (
    <div className="mailingList py-5">
      <div className="container">
        <form>
          <h1 className="mb-4">Join our Mailing List</h1>
          <h4 className="mb-5">
            Get updates on new products, events, and promo's.{" "}
          </h4>
          <div className="inputGroup">
            <input />
            <button className="btn btn-sm">Join</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MailingList;
