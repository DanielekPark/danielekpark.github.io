import React from 'react'; 
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume'
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route path="/about" render={() => <About />}/>
          <Route path="/projects" render={() => <Projects />}/>
          <Route path="/resume" render={() => <Resume />}/>
        </div>        
      </div>
      <Footer />      
    </HashRouter>
  );
}

export default App;