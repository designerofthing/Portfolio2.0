import React from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = ({title}) => {
  return (
    <div id='header'>
      <Link id="landing-tab" to="/">
        <img id='small-logo' src={logo} alt="Steve Watson" />
      </Link>
      <h2 id="title-header">{title}</h2>
      </div>
  );
};

export default Header;
