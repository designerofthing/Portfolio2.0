import React from "react";
import Header from "./Header";
import { useState } from "react";

const About = ({ title }) => {
  const [steve, setSteve] = useState('hidden');
  const [skills, setSkills] = useState('hidden');
  const [cv, setCv] = useState('hidden');

  const launch = () => {

  }

  return (
    <>
      <div id="about-header">
        <Header title={title} />
      </div>
      <div id='about-grid'>
          <div className='grid-cell'><a id="about-steve" onClick={launch(steve)}>About Steve</a></div>
          <div className='grid-cell'><a id="about-skills" onClick={launch(skills)}>Skills</a></div>
          <div className='grid-cell'><a id="about-cv" onClick={launch(cv)}>Curriculum Vitea</a></div>
      </div>
    </>
  );
};

export default About;
