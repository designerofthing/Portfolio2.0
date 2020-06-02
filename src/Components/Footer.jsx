import React from "react";

const Footer = () => {
  const name = "Steve Watson";
  const currentDate = new Date();
  const date = currentDate.getFullYear();
  return (
    <div id="footer">
      <a id="about" href="#">
        ABOUT
      </a>
      <a id="portfolio" href="#">
        PORTFOLIO
      </a>
      <a id="contact" href="#">
        CONTACT
      </a>
      <br></br>
      Created by {name}.<br />
      Copyright {date}.
    </div>
  );
};

export default Footer;
