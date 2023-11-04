import React from 'react';
import { Navbar } from './components';
import Leftpanel from './container/Ticket/Leftpanel';
import TicketPageBody from './container/Ticket/TicketPageBody';
import './TicketHome.css';

const TicketHome = () => (
  <div className="ticket-home-container">
    <Navbar />
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
