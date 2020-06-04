import React from 'react'

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
     <p id='logo' style={{ visibility: blank }}>Steve Watson <br></br> 
     Designer of things...
     </p>
     <button onClick={pullBack}>m</button>
     
     </div>
  )
}

export default Landing;
