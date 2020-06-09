import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({blank}) => {
  const name = "Steve Watson";
  const currentDate = new Date();
  const date = currentDate.getFullYear();
  return (
    <div id="footer" style={{ visibility: blank }}>
      <NavLink id="about-tab" to="/about">
        ABOUT
      </NavLink>
      <NavLink id="portfolio-tab" to="/portfolio">
        PORTFOLIO
      </NavLink>
      <NavLink id="contact-tab" to="/contact">
        CONTACT
      </NavLink>
      <br></br>
      <p id='copyright'>
        Created by {name}.
        Copyright {date}.
      </p>
    </div>
  );
};

export default Footer;
