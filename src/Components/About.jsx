import React from "react";
import Header from "./Header";
import { useState } from "react";
import Rating from "react-rating";
import programs from '../modules/techSkills'

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

  
  const techList = programs.map((program) => {
    return (
      <div className="row">
        <div className="column1">{program.name}</div>
        <div className="column2">
          <Rating initialRating={program.rating} readonly />
        </div>
      </div>
    );
  });

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
      <div id="about-right">
        <img
          id="about-image"
          alt="Steve Profile"
          src={
            "https://portfolio2images.s3.eu-north-1.amazonaws.com/profile.jpg"
          }
        />
      </div>
      <div id="skills" style={{ display: skills }}>
        <h4>Skills</h4>
        <ul>
          <li>Agile working methodology</li>
          <li>Full Stack Web Development</li>
          <li>Test Driven Development</li>
          <li>Behavior Driven Design</li>
          <li>Pair Programming</li>
          <li>Continuous Integration and Deployment</li>
          <li>Management of teams of up to 20 people</li>
          <li>Project Management</li>
          <li>Product Design and Development</li>
          <li>5 Star Communication and Interaction</li>
        </ul>
      </div>
      <div id="tech" style={{ display: tech }}>
        <h4>Tech Abilities</h4>
        {techList}
      </div>
    </>
  );
};

export default About;
