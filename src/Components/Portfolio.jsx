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
        <placeholder id="image-1"></placeholder>
        <Link to="/portfolio/webdev">Web Development</Link>
        <placeholder id="image-2"></placeholder>
      </div>
      <div id="portfolio-products">
        <placeholder id="image-1"></placeholder>
        <Link to="/portfolio/products">Products</Link>
        <placeholder id="image-2"></placeholder>
      </div>
    </>
  );
};

export default Portfolio;
