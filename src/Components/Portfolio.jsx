import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Portfolio = ({ title }) => {
  return (
    <>
      <div id="portfolio">
        <Header title={title} />
      </div>
      <div id="portfolio-webdev">
        <div id="image-1">
          <Link to="/portfolio/webdev">Web Development</Link>
        </div>
      </div>
      <div id="portfolio-products">
        <div id="image-2">
          <Link to="/portfolio/products">Products</Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
