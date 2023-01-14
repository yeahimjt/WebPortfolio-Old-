
import './footer.css'
import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import {GrDocumentPdf} from 'react-icons/gr'
import {FiArrowUpCircle} from 'react-icons/fi'

const Footer = () => {
    
  return (
    <div className="footer__bg">
        <div className="footer__container">
            <div className="footer__container-content">
                <div className="footer__container-content-text">
                    <h1>Thank you for navigating through my website. Here are some quick options to go from here.</h1>
                </div>
                <div className="footer__container-content-icons-container">
                    <p>Social Links</p>
                    <div className="footer__container-content-icons-content">
                        <FaGithubSquare className="footer__container-content-icons-icon"></FaGithubSquare>
                        <AiFillLinkedin className="footer__container-content-icons-icon"></AiFillLinkedin>
                        <GrDocumentPdf className="footer__container-content-icons-icon"></GrDocumentPdf>
                        
                    </div>
                </div>
                <a className="footer__button-container" href="#home">
                <FiArrowUpCircle className="footer__container-content-icons-icon"></FiArrowUpCircle>Back to Top
                </a>
            </div>
        </div>
    </div>
  )
}
 
export default Footer 