import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';

function App() {
  const [matrix, setMatrix] = useState('hidden');

const pullBack = () => {
  setMatrix('visible')
}

  return (
   <div>
     <div id='matrix' style={{visibility: matrix}} />
     Steve Watson <br></br> 
     Designer of things...
    <button onClick={pullBack}>m</button>
     <Footer/>
     </div>
   
  );
}

export default App;
