import React from 'react';
import TicketPageNavbar from './container/Ticket/TicketPageNavbar';
import Leftpanel from './container/Ticket/Leftpanel';
import TicketPageBody from './container/Ticket/TicketPageBody';
import './TicketHome.css';

const TicketHome = () => (
  <div className="ticket-home-container">
    <TicketPageNavbar />
    <div className="ticket-content">
    <div className='left-panel'>
      <Leftpanel />
      </div>
      <div className='main-content'>
      <TicketPageBody/>
      </div>
    </div>
  </div>
);

export default TicketHome;
