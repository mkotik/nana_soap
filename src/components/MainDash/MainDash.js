import React from "react";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import MessageBlock from "./components/MessageBlock";
import Footer from "./components/Footer";
import MailingList from "./components/MailingList";
import "../../styles/MainDash.scss";

function MainDash(props) {
  return (
    <div>
      <Hero />
      <Bestsellers />
      <MessageBlock />
      <MailingList />
      {/* <Footer /> */}
      {/* <div style={{ height: "40rem" }}></div> */}
    </div>
  );
}

export default MainDash;
