import React, {useState} from 'react'
import './skills.css'
import Collapsible from '../../components/collapsible/Collapsible'
import {DiJava,DiPython,DiHtml5, DiCss3, DiJavascript, DiJavascript1, DiPhp, DiReact, DiGithub, DiMysql} from 'react-icons/di';
import {TbBrandPhp} from 'react-icons/tb'
import {SiFlask} from 'react-icons/si'
import {CiMinimize1,CiMaximize1} from 'react-icons/ci'
import '../../components/animations/headers.css'

import { useInView } from 'react-intersection-observer';

const Skills = () => {
const { ref:headerSkillsRef, inView:headerSkillsView} = useInView();
const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div ref={headerSkillsRef} className="skills__container" id="skills">
        <div className={`${'skills__container-content'} ${headerSkillsView ? 'animateHeaderRight' : ''}`}>
          <div className="collapse-container">
                      <div className="collapse">
                        <div className="collapse-options">
                            {/* <button className="skills-option minimize"><CiMinimize1 className="skills-option-icon"></CiMinimize1>Minimize</button>
                            <button onClick={() => setIsOpen(!isOpen)} className="skills-option expand"><CiMaximize1 className="skills-option-icon"></CiMaximize1>Expand</button> */}
                        </div>
                          <div className="languages-collapse">             
                              <Collapsible className="languages" title="Languages" open={isOpen}>
                                  <div className={`${'languages-content-container'}`}>
                                      <div className="box">
                                          <DiJava className="java-icon"></DiJava>
                                          Java
                                      </div>                                    
                                      <div className="box">
                                          C
                                      </div>                                    
                                      <div className="box">
                                          <DiPython className="python-icon"></DiPython>    
                                          Python
                                      </div>                                    
                                      <div className="box">
                                          <DiHtml5 className="html-icon"></DiHtml5>    
                                          HTML
                                      </div>                                   
                                      <div className="box">
                                          <DiCss3 className="css-icon"></DiCss3>    
                                          CSS
                                      </div>                                  
                                      <div className="box">
                                          <DiJavascript1 className="javascript-icon"></DiJavascript1>    
                                          JavaScript
                                      </div>                                    
                                      <div className="box">
                                          <TbBrandPhp className="php-icon"></TbBrandPhp>    
                                          PHP
                                      </div>   
                                      <div className="box">
                                          <DiMysql className="php-icon"></DiMysql>    
                                          MySql
                                      </div>                                                                     
                                  </div>
                              </Collapsible>
                          </div>
                          <div className="frameworks-collapse">
                              <Collapsible className="frameworks" title="Frameworks">
                                  <div className="frameworks-content-container">
                                      <div className="box">
                                          <SiFlask className="java-icon"></SiFlask>
                                          Flask
                                      </div>                                    
                                      <div className="box">
                                          <DiReact className="java-icon"></DiReact>
                                          React
                                      </div>   
                                      <div className="box">

                                          Node Js
                                      </div>                                   
                                  </div>
                              </Collapsible>
                          </div>
                          <div className="applications-collapse">
                              <Collapsible className="languages" title="Applications">
                              <div className="applications-content-container">
                                      <div className="box">
                                          <DiGithub className="java-icon"></DiGithub>
                                          Github
                                      </div>                                    
                              </div>
                              </Collapsible>
                          </div>
                      </div>
            </div>
        </div>
        <div ref={headerSkillsRef} className="skills__container-heading-container">
          <div className={`${'skills__container-heading-header'} ${headerSkillsView ? 'animateHeaderLeft' : ''}`}>
            <h1>Skills</h1>
          </div>
          <div className="skills__container-heading-content-container">
            <div className={`${'skills__container-heading-content-content'} ${headerSkillsView ? 'animateTextUp' : ''}`}>
              <p>The skills I've developed a great understanding for thus far. Determined to increase my knowledge upon tech stacks that I have not yet worked with. </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Skills
