import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
   <header className="main-header">
    <ul className="main-nav">
        <li><NavLink exact to="/" className="nav-btn">HOME</NavLink></li>
        <li><NavLink to="/about" className="nav-btn">ABOUT</NavLink></li>
        <li><NavLink to="/projects" className="nav-btn">PROJECTS</NavLink></li>
        <li><NavLink to="/resume" className="nav-btn">RESUME</NavLink></li>
      </ul>    
   </header>
  )
}

export default Header