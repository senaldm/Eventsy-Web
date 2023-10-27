import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToMainService = () => {
    const mainServiceSection = document.getElementById('main-service'); // Replace 'main-service' with the actual id of your MainService section

    if (mainServiceSection) {
      mainServiceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app_header app_wrapper section_padding" id="home">
      <div className="app_wrapper_info">
        <div className="header-content">
          <h1 className="app_header-h1">Event Maestro</h1>
          <p className="p_opensans" style={{ margin: '2rem 0', color: 'white', textAlign: 'center' }}>
            Good planning makes your day special.
          </p>
          <button className="custom_button" onClick={scrollToMainService}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
