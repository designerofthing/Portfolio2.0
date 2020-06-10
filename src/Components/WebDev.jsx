import React from "react";
import Header from "./Header";
import ImageGallery from 'react-image-gallery';

const WebDev = ({ title }) => {

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
      <div id="wd-header">
        <Header title={title} />
      </div>
      <div id="webdev-page">
      <ImageGallery items={images} showThumbnails={false} />
      </div>
    </>
  );
};

export default WebDev;
