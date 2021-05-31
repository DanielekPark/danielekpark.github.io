import React from 'react';
import {volunteerData, workData, projectsData} from './data/Data';

const Resume = () => {
  const [volunteer, setVolunteerData] = React.useState(volunteerData);
  const [work, setWorkData] = React.useState(workData);
  const [projects, setProjectsData] = React.useState(projectsData); 

 return (
  <div>
   <h2 className="header statement">I am a  front end web developer seeking to build and improve websites to make people’s lives easier through technology.</h2>
    <div className="skills-container">
      <div>
        <h3>Skills</h3>
        <ul className="skills">
          <li>HTML, CSS, JavaScript, React Js, Ajax</li>
          <li>Git, Github, Node.js</li>
          <li>Mac Os</li>
        </ul>
      </div>
      <div>
        <h3>Collboration tools</h3>
        <ul className="skills">
          <li>Slack</li>
          <li>Trello</li>
        </ul>          
      </div>
    </div>

   <h2 className="resume">Volunteer Experience</h2>
      {volunteer.map((item) => {
        const {id, title, date, li1, li2, li3, li4} = item; 
        return (
          <ul key={id}>
            <li>{title}</li>
            <li>{date}</li>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
          </ul>  
        )
      })}

    <h2 className="resume">Work Experience</h2>
      {work.map((item) => {
        const {id, title, date, li1, li2} = item; 
        return (
          <ul key={id}>
            <li>{title}</li>
            <li>{date}</li>
            <li>{li1}</li>
            <li>{li2}</li>
          </ul>  
        )
      })}

   <h2 className="resume">Projects</h2>
      {projects.map((item) => {
        const {id, title, link, desc, li1, li2} = item; 
        return (
          <ul key={id}>
            <li>{title}</li>
            <li><a className="link" href={link} target="_blank" rel="noreferrer">Hosted Site</a></li>
            <li>{desc}</li>
            <li>{li1}</li>
            <li>{li2}</li>
          </ul>  
        )
      })}

    <h3>Certification: </h3>
    <p><a className="certification" href="https://www.credential.net/fc32925c-3dd6-4c5d-926c-f6034e66be80" target="_blank" rel="noreferrer">Team Treehouse (Online Course) Team Treehouse Front End Techdegree May/2020</a></p>

    <h3>Coursework: <span>HTML, CSS, Responsive mobile design,  Sass, Jquery, Javascript, Ajax.</span></h3>
  </div>
 );
}

export default Resume; 