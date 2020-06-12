import React from "react";
import Header from "./Header";
import { useState } from "react";
import Rating from "react-rating";

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

  const programs = [
    { name: "HTML & CSS", rating: 3.5 },
    { name: "Javascript & ReactJS", rating: 3 },
    { name: "React Native", rating: 2.5 },
    { name: "Cypress", rating: 4 },
    { name: "Ruby/Rails & RSpec", rating: 3.5 },
    { name: "NodeJS", rating: 2 },
    { name: "Git", rating: 4 },
    { name: "Photoshop & Illustrator", rating: 3 },
    { name: "AutoCAD, Rhino, 3DStudio", rating: 3.5 },
  ];
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
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQEGS43wYaFp_A/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=ctSjVfLk6tWtfmWVFfzpaAJ191SvRPeWEEHVq0aYuDs"
          }
        />
      </div>
      <div id="skills" style={{ display: skills }}>
        <h4>Skills</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Pellentesque sit amet enim vel metus porta consectetur.</li>
          <li> Interdum et malesuada fames ante ipsum primis in faucibus.</li>
          <li> Phasellus quis tortor vel orci tempor vestibulum.</li>
          <li>Suspendisse nec bibendum ex.</li>
          <li>Duis vulputate neque et diam posuere congue.</li>
          <li>Morbi nec velit ante.</li>
          <li> In non congue ligula.</li>
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
