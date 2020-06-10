import React from "react";
import Header from "./Header";
import ImageGallery from 'react-image-gallery';

const Products = ({ title }) => {
  
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
     
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      
    },
  ];
  
  return (
    <>
      <div id="products-header">
        <Header title={title} />
      </div>
      <div id="product-page">
      <ImageGallery items={images} showThumbnails={false} />
      </div>
    </>
  );
};

export default Products;
