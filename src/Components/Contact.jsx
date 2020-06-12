import React from "react";
import Header from "./Header";
import GitHub from "../images/Octocat.jpg";
import LinkedIn from "../images/linkedin.png";
import Gmail from '../images/gmail.png'

const Contact = ({ title }) => {
  return (
    <div id="contact-header">
      <Header title={title} />
      <div id="contact-grid">
        <div className="grid-cell">
          <a href="https://www.linkedin.com/in/stevewatson75aa/">
            <img id="linkedin-icon" src={LinkedIn} alt='LinkedInLogo'/>
            <br />
          </a>
        </div>
          <div className="grid-cell">
            <a href="https://github.com/designerofthing">
              <img id="github-icon" src={GitHub} alt='GitHubLogo'/>
            </a>
          </div>
          <div className="grid-cell">
            <a href="mailto:designerofthings@gmail.com">
              <img id="gmail-icon" src={Gmail} alt='GmailLogo'/>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Contact;
