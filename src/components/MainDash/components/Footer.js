import React from "react";

function Footer(props) {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="footerTabs">
          <h5>Contact</h5>
          <h5>FAQ</h5>
          <h5>Shipping</h5>
          <h5>Returns</h5>
        </div>
        <p className="copyright">© 2021 Nana's Soaps</p>
      </div>
    </div>
  );
}

export default Footer;
