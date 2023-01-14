import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage'

import {Navbar,SkillTree,ProjectCarousel,SocialLinks,Pdf} from './components';
import {AboutMe, Contact, Header, Footer, Projects, Skills} from './containers';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/resume" element={<Pdf/>}/>

    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
