import React from "react";
import Header from "./Header";
import ImageGallery from 'react-image-gallery';

const WebDev = ({ title }) => {

  const images = [
    {
      original: 'https://portfolio2images.s3.eu-north-1.amazonaws.com/DailyNewsSense.png',
      description: "News App React Client, Rails API",
    },
    {
      original: 'https://portfolio2images.s3.eu-north-1.amazonaws.com/rps.png',
      description: "Rock Paper Scissors React App",
    },
    {
      original: 'https://portfolio2images.s3.eu-north-1.amazonaws.com/rt.png',
      description: "Release Tracker App React Client, Rails API",
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
