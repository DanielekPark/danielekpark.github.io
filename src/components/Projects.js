import React from 'react';
import {portfolioData} from './data/Data';

const Projects = () => {
 const [portfolio, setPortfolio] = React.useState(portfolioData); 
 return (
  <div>
   <h1 className="header">Projects</h1>
   <div className="section">
    {portfolio.map((card) => {
      const {name, desc, id, img, link, site} = card; 
      return (
        <React.Fragment key={id}>
          <div className="project-card clearfix" >
            <img src={img} alt="img" className="card-img" />
            <div className="project-desc">
              <h3 className="project-title">{name}</h3> 
              <p className="info">{desc}</p>
              <div className="links-container">
                <a href={link} target="_blank" rel="noreferrer">Repository</a>
                <a href={site} target="_blank" rel="noreferrer">Hosted Site</a>            
              </div>
            </div>
          </div>
          <br /> 
        </React.Fragment>  
      );
    })}
    </div>     
   </div>
 );
}

export default Projects;