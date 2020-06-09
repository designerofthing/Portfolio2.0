import React, { useState } from 'react'
import './css/App.css';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const App = () => {
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
    <>
    <Switch>
    <Route exact path='/' render={() => ( <Landing blank={blank} matrix={matrix} pullBack={pullBack}/>)}></Route> 
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/portfolio' component={Portfolio}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    </Switch>
    <Footer blank={blank} pullBack={pullBack}/>
   </>
  );
}

export default App;
