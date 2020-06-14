import React, { useState } from "react";
import Header from "./Header";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const Products = ({ title }) => {
  const [path, setPath] = useState("");

  const singleProduct = (event) => {
    setPath(event.target.title.toLowerCase());
  };

  const images = [
    {
      original: "https://portfolio2images.s3.eu-north-1.amazonaws.com/skase1.jpg",
      originalTitle: "Skase",
      description: "Skase Tea Cup Set 2005",
    },
    {
      original:
        "https://portfolio2images.s3.eu-north-1.amazonaws.com/proponshelf.jpg",
      originalTitle: "Prop",
      description: "Prop Table Lamp 2008",
    },
    {
      original: "https://portfolio2images.s3.eu-north-1.amazonaws.com/Cass1.jpg",
      originalTitle: "Cassiopeia",
      description: "Cassiopeia Table 2007",
    },
  ];

  return (
    <>
      <div id="products-header">
        <Header title={title} />
      </div>
      <div id="product-page">
        <Link to={`/portfolio/${path}`} />
        <ImageGallery
          items={images}
          showThumbnails={false}
          onClick={singleProduct}
        />
      </div>
    </>
  );
};

export default Products;
