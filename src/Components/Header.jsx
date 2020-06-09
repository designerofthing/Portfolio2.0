import React from 'react'
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import '../css/Header.css'

const Header = () => {
  return (
    <div id='small-logo'>
      <Link id="landing-tab" to="/">
      <img  src={logo} alt='Steve Watson' />
      </Link> 
    </div>
  )
}

export default Header