import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import { Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  


  return (
    <>
    <Switch>
    <Route exact path='/' component={Landing}></Route> 
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/portfolio' component={Portfolio}></Route>
    <Route exact path='contact' component={Contact}></Route>
    </Switch>
    <Footer blank={blank} setBlank={setBlank}/>
   </>
  );
}

export default App;
