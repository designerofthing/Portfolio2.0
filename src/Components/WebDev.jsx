import React from "react";
import Header from "./Header";
import ImageGallery from "react-image-gallery";
import projects from '../modules/projects'

const WebDev = ({ title }) => {
  const singleProject = (event) => {
    window.location.href = event.target.title;
  };
  
  return (
    <>
      <div id="wd-header">
        <Header title={title} />
      </div>
      <div id="webdev-page">
        <ImageGallery
          items={projects}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onClick={singleProject}
        />
      </div>
    </>
  );
};

export default WebDev;
