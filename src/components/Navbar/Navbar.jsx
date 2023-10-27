import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
// import LoginPopup from './LoginPopup';
// import LoginPopup from 'C:\Users\ACER\Downloads\eventsy_ticket\eventsy_ticket\src\container\Log\log';
const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app_navbar" id="top">
      <div className="app_navbar-logo">
        {/* <a href='/'> */}
          <img src={images.Logo} alt="app logo" />
        {/* </a> */}
        <ul className="app_navbar-links">
        <li className="p_opensans">
          <a href="/">Eventsy</a>
          </li>
          </ul>
        {/* <a href="/" alt="app logo">Eventsy</a> */}
       
      </div>
     
      <ul className="app_navbar-links">
        <li className="p_opensans">
          <a href="/tickets">Tickets</a>
        </li>
        <li className="p_opensans">
          <a href="/invitations">Invitations</a>
        </li>
        <li className="p_opensans">
          <a onClick={() => scrollToSection('main-service')} href="#">
            Services
          </a>
        </li>
        <li className="p_opensans">
          <a onClick={() => scrollToSection('about-us')} href="#">
            AboutUs
          </a>
        </li>
        <li className="p_opensans">
          <a onClick={() => scrollToSection('contact')} href="#">
            ContactUs
          </a>
        </li>
      </ul>
      <div className="app_navbar-login-signup">
        <a href="#login" className="p_opensans">
          Log In
        </a>
        <div></div>
        <a href="#signup" className="p_opensans">
          Sign Up
        </a>
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(!ToggleMenu)}
        />
        {ToggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app_navbar-smallscreen-links">
              <li className="p_opensans">
                <a href="#tickets">Tickets</a>
              </li>
              <li className="p_opensans">
                <a href="#invitations">Invitations</a>
              </li>
              <li className="p_opensans">
                <a onClick={() => scrollToSection('main-service')} href="#">
                  Services
                </a>
              </li>
              <li className="p_opensans">
                <a onClick={() => scrollToSection('about-us')} href="#">
                  AboutUs
                </a>
              </li>
              <li className="p_opensans">
                <a onClick={() => scrollToSection('contact')} href="#">
                  ContactUs
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
