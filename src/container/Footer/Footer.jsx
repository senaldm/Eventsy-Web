import React, { useEffect } from 'react';
import './Footer.css';
import images from '../../constants/images'; 
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer">
      <div className="footer-section contact" id='contact'>
        <h3>Contact Us</h3>
        <ul>
          <li> <a href="mailto:team.eventsy@email.com">
         team.eventsy@email.com
        </a></li>
        </ul>
      </div>

      <div className="footer-section information">
        <h3>Information</h3>
        <ul>
          <li>
            <a onClick={() => scrollToSection('about-us')} href="#">
              About Us
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('faq')} href="#">
              FAQ
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('termconditions')} href="#">
              Term and Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section download-app" style={{flexDirection:'column'}}>
        <div className=''>
        <h3>Download Our App</h3>
        <a href="your-app-download-link">
          <img src={images.logo} alt="Download on the App Store"  style={{objectFit:'contain',width:'50px',height:'50px'}}/>
        </a>
        </div>
        {/* You can add more app download options if needed */}
      </div>
      
      <div className="footer-section scroll-to-top">
  <a onClick={() => scrollToSection('top')} href="#">
    <i className="fa fa-chevron-up" aria-hidden="true"></i>  Top
  </a>
</div>

    </div>
  );
};

export default Footer;
