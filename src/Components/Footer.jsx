import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = (blank) => {
  // const [blank, setBlank] = useState('visible');
  const name = "Steve Watson";
  const currentDate = new Date();
  const date = currentDate.getFullYear();
  return (
    <div id="footer" style={{ visibility: blank }}>
      <Link id="landing" to="/">
        Image
      </Link>
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
      <p>
        Created by {name}.<br />
        Copyright {date}.
      </p>
    </div>
  );
};

export default Footer;
