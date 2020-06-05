import React, { useState } from 'react'
import logo from '../images/logo.jpg';

const Landing = () => {
  const [matrix, setMatrix] = useState('0vh');
  const [blank, setBlank] = useState('visible');

const pullBack = () => {
  setBlank('hidden');
  setMatrix('cover');
  setTimeout(function(){
    setMatrix('0vh');
    setBlank('visible');
},5000); 
}
  return (
    <div id='matrix' style={{backgroundSize: matrix}}>
     <div id='logo' style={{ visibility: blank }}><img  src={logo} alt='Steve Watson' /><br></br> 
     {/* <h4 id='byline'>Designer of things...</h4> <br/> */}
     <a id='secret' onClick={pullBack}>matrix</a>
     </div>
     
     
     </div>
  )
}

export default Landing;
