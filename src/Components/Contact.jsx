import React from "react";
import Header from "./Header";
import GitHub from '../images/Octocat.jpg'
import LinkedIn from '../images/linkedin.png'

const Contact = ({ title }) => {
  return (
    <div id="contact-header">
      <Header title={title} />
      <div id="contact-grid">
        <div className="grid-cell">
        <img id='linkedin-icon' src={LinkedIn}/>
          <a href='https://www.linkedin.com/in/stevewatson75aa/'>LinkedIn</a>
        </div>
        <div id="contact-grid">
          <div className="grid-cell">
          <img id='github-icon' src={GitHub}/>
            <a href='https://github.com/designerofthing'> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
