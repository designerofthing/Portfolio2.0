import React, { useState } from "react";
import Header from "./Header";
import ImageGallery from "react-image-gallery";
import images from '../modules/productImages.js'

const Products = ({ title }) => {
 
  const singleProduct = (event) => {
    window.location.href= event.target.title
  };

  

  return (
    <>
      <div id="products-header">
        <Header title={title} />
      </div>
      <div id="product-page">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          // onClick={singleProduct}
          />
      </div>
    </>
  );
};

export default Products;
