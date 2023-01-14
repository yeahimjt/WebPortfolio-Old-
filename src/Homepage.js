import React from 'react';
import './App.css';

import {Navbar,SkillTree,ProjectCarousel,SocialLinks,Pdf} from './components';
import {AboutMe, Contact, Header, Footer, Projects, Skills} from './containers';



const App = () => {
  return (
    <div className="App">
      <div className="header__bg">
        <Navbar/>
        <Header />
      </div>
      <div className="projects__bg">
        <Projects/>
      </div>
      <Skills/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
