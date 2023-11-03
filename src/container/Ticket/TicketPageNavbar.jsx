import React from 'react';
import './TicketPageNavbar.css';
import images from '../../constants/images';
const TicketPageNavbar = () => (
  <div className="navbar" >
      <div className="app_navbar-logo">
        <a href='/'><img src={images.logo} alt="app logo" /></a>
        <span>Eventsy</span>
      </div>
    <div className="navbar-left">
      <span className="header">Ticket Handling</span>
    </div>
   
  </div>
);

export default TicketPageNavbar;
