import React, {Component,useRef,useState} from 'react'
import './contact.css'
import '../../components/animations/headers.css'
import '../../components/animations/general.css'
import {IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline} from 'react-icons/io'
import emailjs from 'emailjs-com';


import { useInView } from 'react-intersection-observer';






const Contact = () => {
  const { ref:headerContactRef, inView:headerContactView} = useInView();
  const form=useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [messageNotClosed, setMessageNotClosed] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pad3i59', 'template_e3e68yp', form.current, 'ipCsKrtr9rzkVZBdD')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
          setMessageNotClosed(false)
          console.log(emailSent);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset();
  };
    

  return (
    <div ref={headerContactRef}  className="contact__container" id="contact">
      <form ref={form} onSubmit={sendEmail}>
      <div  className={`${'contact__form-container'} ${headerContactView ? 'scaleUp' : ''}`}>
      {emailSent && !messageNotClosed &&
        <div className="contact__form-response-container">
          <div className="contact__form-response-content">
            <div className="contact__form-response-icon">
              <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
            </div>
            
            <div className="contact__form-response-text">
              <h1>Sent Successfully!</h1>
              <p>Thank you for reaching out! I will get back to you shortly.</p>
            </div>
            <div className="contact__form-response-close">
              <IoMdCloseCircleOutline onClick={() => {setMessageNotClosed(!messageNotClosed)} }></IoMdCloseCircleOutline>
            </div>
          </div>
      
        </div>
        }
          <div className="contact__form-name">
            <div className="contact__form-name-first"><h1>First Name</h1></div>
            <div className="contact__form-name-last"><h1>Last Name</h1></div>
          </div>
          <div className="contact__form-name-inputs">
            <input className={`${headerContactView ?'animate-pop-out' : ''}`} name="fname"></input>
            <input className={`${headerContactView ?'animate-pop-out' : ''}`} name="lname"></input>
          </div>
          <div className="contact__form-email">
            <h1>Email Address</h1>
            <input className={`${headerContactView ?'animate-pop-out' : ''}`} name="email"></input>
          </div>
          <div className="contact__form-subject">
            <h1>Email Subject</h1>
            <input className={`${headerContactView ?'animate-pop-out' : ''}`} name="subject"></input>
          </div>
          <div className="contact__form-body">
            <h1>Email Content</h1>
            <textarea className={`${headerContactView ?'animate-pop-out' : ''}`} name="body"></textarea>
            <div className="contact__form-submit">
              <button type="submit"><h1>Submit</h1></button>
            </div>
          </div>
          
      </div>
      </form>
      <div  className="contact__container-heading-container">
          <div className={`${'contact__container-heading-header'} ${headerContactView ? 'animateHeaderLeft' : ''}`}>
            <h1>Contact</h1>
          </div>
          <div  className="contact__container-heading-content-container">
            <div className={`${'contact__container-heading-content-content'} ${headerContactView ? 'fadeUp' : ''}`}>
              <p>Contact me through email to get a swift response! I check my emails frequently and I am excited to hear from you to discuss further on my projects as I am project-driven. Also would be more than happy to answer any further questions you may have about me.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Contact
