import React from 'react';
import Github from './Github';
import Gmail from './Gmail';
import LinkedIn from './LinkedIn';
import Phone from './Phone'; 

const Footer = () => {
  return(
   <footer>
    <ul className="svg-container">
      <li><a href="https://github.com/DanielekPark" target="_blank" rel="noreferrer">Github</a><Github /></li>
      <li><span>daniel.ek.park@gmail.com</span><Gmail /></li>
      <li><a href="https://www.linkedin.com/in/daniel-park-70878119a/" target="_blank" rel="noreferrer">LinkedIn</a><LinkedIn /></li>
      <li><a href="tel:+2138170205" rel="noreferrer">(213)817-0205</a><Phone /></li>
    </ul>
   </footer>
  );
}

export default Footer; 