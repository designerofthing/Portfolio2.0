import React from "react";
import Header from "./Header";
import WebDev from "./WebDev";
import Products from "./Products";

const Portfolio = ({title}) => {
  return (
    <>
      <Header title={title}/>
      <div id="portfolio" >
        <div id='web-dev'>
          <WebDev />
        </div>
        <div id='products'>
          <Products />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
