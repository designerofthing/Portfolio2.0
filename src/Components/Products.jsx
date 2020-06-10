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
      original: "https://www.arch2o.com/wp-content/uploads/2012/05/skase.jpg",
      originalTitle: "Skase",
      description: "Skase Tea Cup Set 2005",
    },
    {
      original:
        "https://www.itsliquid.com/wp-content/uploads/design/proponshelf.jpg",
      originalTitle: "Prop",
      description: "Prop Table Lamp 2008",
    },
    {
      original: "http://simbiosisgroup.net/wp-content/uploads/2011/08/0.jpg",
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
