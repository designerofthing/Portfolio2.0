import React from "react";

const Footer = (blank) => {
  // const [blank, setBlank] = useState('visible');
  const name = "Steve Watson";
  const currentDate = new Date();
  const date = currentDate.getFullYear();
  return (
    <div id="footer" style={{visibility: blank}}>
      <a id="about-tab" href="#">
        ABOUT
      </a>
      <a id="portfolio-tab" href="#">
        PORTFOLIO
      </a>
      <a id="contact-tab" href="#">
        CONTACT
      </a>
      <br></br>
      <p>Created by {name}.<br />
      Copyright {date}.</p> 
    </div>
  );
};

export default Footer;
