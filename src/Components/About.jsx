import React from "react";
import Header from "./Header";
import { useState } from "react";
import steve from "../images/steve.jpg";

const About = ({ title }) => {
  const [steve, setSteve] = useState("block");
  const [skills, setSkills] = useState("none");
  const [tech, setTech] = useState("none");

  const launchSteve = () => {
    setSteve("block");
    setSkills("none");
    setTech("none");
  };
  const launchSkills = () => {
    setSkills("block");
    setSteve("none");
    setTech("none");
  };
  const launchTech = () => {
    setTech("block");
    setSkills("none");
    setSteve("none");
  };
  return (
    <>
      <div id="about-header">
        <Header title={title} />
      </div>
      <div id="about-grid">
        <div className="grid-cell">
          <a id="about-steve" onClick={launchSteve}>
            About Steve
          </a>
        </div>
        <div className="grid-cell">
          <a id="about-skills" onClick={launchSkills}>
            Skills
          </a>
        </div>
        <div className="grid-cell">
          <a id="about-tech" onClick={launchTech}>
            Tech
          </a>
        </div>
      </div>
      <div id="steve" style={{ display: steve }}>
        <h4>G'day, I'm Steve.</h4>
        <p>
          I am an Australian designer and junior web developer living in
          Stockholm. <br />
          I enjoy creating web and mobile applications in the full stack,
          <br /> using Agile methodologies and Test Driven Development. <br />
          I have a background in high end hospitality and I hold a degree in
          <br />
          Industrial Design, having exhibited my furniture and homeware designs
          <br /> all over the world including Salone del Mobile in Milan. <br />
        </p>
      </div>
      <img
        id="about-image"
        src={
          "https://media-exp1.licdn.com/dms/image/C4D03AQEGS43wYaFp_A/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=ctSjVfLk6tWtfmWVFfzpaAJ191SvRPeWEEHVq0aYuDs"
        }
      />

      <div id="skills" style={{ display: skills }}>
        These are Steve's skills.
      </div>
      <div id="tech" style={{ display: tech }}>
        This is Steve's Tech list.
      </div>
    </>
  );
};

export default About;
