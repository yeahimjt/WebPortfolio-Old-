import React from 'react'
import {AiFillMail} from 'react-icons/ai'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {AiFillGithub} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi';
import Coin from '../../assets/gold-coin.png';
import Nerd4U from '../../assets/nerd4u.png';
import PHPproject from '../../assets/php-project.png';
import { useInView } from 'react-intersection-observer';

import './projects.css'
import '../../components/animations/headers.css'
import '../../components/animations/text.css'



const responsive = {
  10: { items: 1,
      itemsFit:'contain' },


  
};


const items = [
  <div className="projects__project-container">
  <div className="projects__project-image">
    <img src={Nerd4U} alt="Project1"/>

  </div>
  <div className="projects__project-content-container">
    <div className="projects__project-social-links">
    <a  target="_blank" rel="noreferrer" href="https://github.com/yeahimjt/Group-7-Project"><button><AiFillGithub/><p>Repository</p></button></a>
    <a target="_blank" rel="noreferrer" href="http://www.nerd4u.online"><button><BiLinkExternal/><p>Live Server</p></button></a>
    </div>
    <div className="projects__project-content">
    <h2>Ecommerce Website - Software Engineering Project</h2>
    <p>Project was performed in an agile team of five people, and hosted a weekly scrum meeting to ensure project progress was on course to completion. Performed as a Full Stack Developer out of the genuine curiousity I had with working with both front and back end development. The project developed would allow users to create listings for products they wished to sell where others would be able to purchase them through their shopping cart. An admin panel page was also included to allow anyone with the responsibility to edit, or delete users listings. The website was hosted on an AWS EC2 instance with the MySQL database hosted on AWS RDS. Languages utilized were Flask+Python, HTML, CSS, and JavaScript. </p>
    </div>
  </div>
</div>,
  <div className="projects__project-container">
  <div className="projects__project-image">
    <img src={PHPproject} alt="Project2"/>

  </div>
  <div className="projects__project-content-container">
    <div className="projects__project-social-links">
        <a  target="_blank" rel="noreferrer" href="https://github.com/yeahimjt/php-ecommerce"><button ><AiFillGithub/><p>Repository</p></button></a>

    </div>
    <div className="projects__project-content">
    <h2>PHP E-commerce API Functions - Enterprise Software Engineering Project</h2>
    <p>Created PHP pages to execute functions such as upload, view, and search for PDF files. Created API call to autonamously query and recieve files from external server daily utilizing a cronjob that would be inserted into a phpmyadmin database with the appropriate database column values. Learned the syntax of PHP and quickly picked up the skills to understand php code, and also efficiently write it. This project was a stepping stone in understanding the importance and process of creating API functions in the scope of E-commerce.</p>
    </div>
  </div>
</div>,


];

const Projects = () => {
  const { ref:headerProjectsRef, inView:headerProjectsView} = useInView();


  return (
    <>

    <div className="projects__container" id="projects">
      <div ref={headerProjectsRef} className="projects__container-heading">
        <div  className={`${'projects__container-heading-container'} ${headerProjectsView ? 'animateHeaderRight' : ''}`}>
          <h1>Projects</h1>
        </div>
        <div className={`${'projects__container-heading-container-content'} ${headerProjectsView ? 'animateTextUp' : ''}`}>
          <p>I believe the best way to learn and cement key concepts mentally is to apply them directly through projects. Very passionate about the projects I've completed and eager to expand upon them.</p>
          <div className="projects__container-heading-cta">
            <p>Want to talk more about the projects I've developed?</p>
            <button type="button"><AiFillMail className="projects__container-heading-cta-mail"/><section>Contact Me</section></button>
          </div>
        </div>
      </div>
      <div className="projects__container-carousel ">
        <AliceCarousel mouseTracking items={items}  infinite={true}autoPlay={true} autoPlayInterval={5000}  responsive={responsive} styles={"margin:0;"}/>
      </div>
    </div>
    

    </>
  )
}

export default Projects
