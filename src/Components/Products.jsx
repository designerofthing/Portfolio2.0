import React from "react";
import Header from "./Header";

const Products = ({ title }) => {
  return (
    <>
      <div id="portfolio">
        <Header title={title} />
      </div>
      <div id="product-page">
      </div>
    </>
  );
};

export default Products;
