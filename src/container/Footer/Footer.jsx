import React, { useEffect } from 'react';
import './Footer.css';

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
        <a href="mailto:caliwines@email.com">
          <p>caliwines@email.com</p>
        </a>
        <p>Phone: +1 (234) 567 89 00</p>
        <p>Address: 1111 White Ln, St Helena, CA 94574</p>
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
            <a onClick={() => scrollToSection('awards')} href="#">
              Awards
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

      <div className="footer-section follow-us">
        <h3 class='follows-us'>Follow Us</h3>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
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
