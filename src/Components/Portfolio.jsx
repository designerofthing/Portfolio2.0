import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Portfolio = ({ title }) => {
  return (
    <>
      <div id="portfolio-header">
        <Header title={title} />
      </div>
      <div id="portfolio-webdev">
        <div id="image-1">
          <Link id='port-link-1' to="/portfolio/webdev">Web Development</Link>
        </div>
      </div>
      <div id="portfolio-products">
        <div id="image-2">
          <Link id='port-link-2' to="/portfolio/products">Product Design</Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
