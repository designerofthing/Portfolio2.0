import React from 'react'
import logo from '../images/logo.jpg';

const Landing = ({blank, matrix, pullBack}) => {
  
  return (
    <div id='matrix' style={{backgroundSize: matrix}}>
     <div id='logo' style={{ visibility: blank }}><img  src={logo} alt='Steve Watson' /><br></br> 
     <a id='secret' onClick={pullBack}>matrix</a>
     </div>
     
     
     </div>
  )
}

export default Landing;
