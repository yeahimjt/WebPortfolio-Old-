import React, {Suspense} from 'react'

import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {GrDocumentPdf} from 'react-icons/gr';
import {Link} from "react-router-dom"
import Pdf from '../../components/pdf/Pdf'
import './header.css';
import '../../components/animations/general.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));






const Header = () => {
  return (
    <>    

<div className="animated-bg">
        <div className="xxl"></div>
        <div className="xl"></div>
        <div className="l"></div>
        <div className="m"></div>
        <div className="s"></div>
      </div>  
    <div className="arrow-cta">
          <span className="arrow"></span>
          <span className="arrow"></span>
    </div>
    <div className="header__container">
        
        <div className="header__container-content">
          <h1>Jonathan Andrew Trevino</h1>
          <p>Full Stack Developer who specializes in curating efficient and reliable applications.</p>
        </div>  
        <div className="header__container-3d">
          <Suspense fallback={<div class="lds-circle"><div></div></div>}>
          <Spline scene="https://prod.spline.design/XE8Kkak3C6gfUwZp/scene.splinecode" />
          </Suspense>
        </div>
        <div className="header__container-socialLinks">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonathanandrewtrevino/" ><AiFillLinkedin className="header__container-socialLinks-link"/></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/yeahimjt?tab=repositories"><AiFillGithub className="header__container-socialLinks-link"/></a>
          <Link to="/resume" target="_blank" rel="noreferrer"><GrDocumentPdf className="header__container-socialLinks-link"/></Link>
        </div>
    </div>
    </>
  )
}

export default Header
