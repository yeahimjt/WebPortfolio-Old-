import React from 'react'

import {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer';


import './aboutMe.css'
import '../../components/animations/headers.css'

const AboutMe = () => {

  const { ref:headerAboutRef, inView:headerAboutView} = useInView();

  return (
    <div className="about__container about__bg" id="about">
   

      <div ref={headerAboutRef}className="about__container-heading-container">
        <div  className={`${'about__container-heading-header'} ${headerAboutView ? 'animateHeaderRight' : ''}`}>
          <h1>About Me</h1>
        </div>
        <div className={`${'about__container-heading-content'} ${headerAboutView ? 'animateHeaderLeft' : ''}`}>
          <p>Passionate about Full stack development, and the knowledge that can be absorbed with working with all aspects that come with software development. I enjoy being able to express my creativity with the projects I set in front of myself and being able to see the final outcome.</p>
          <p>Determined to fully fledge out my knowledge with languages outside of my current tech stack.</p>
          <p>Quick to pick up new languages, frameworks, and applications.</p>

        </div>
      </div>
        
    </div>
  )
}

export default AboutMe
