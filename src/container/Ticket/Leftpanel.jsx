import React from 'react';
import './Leftpanel.css';
import 'font-awesome/css/font-awesome.min.css';
const Leftpanel = () => (
  <div className="left-panel">
    <div className="panel-item">
    <i class="fa fa-ticket" aria-hidden="true"></i> Create Ticket
    </div>
    <div className="panel-item">
      <i class="fa fa-user" aria-hidden="true"></i> Account
    </div>
    <div className='panel-item'>
    <i class="fa fa-home" aria-hidden="true"></i>
      <a href="/">Home</a>
    </div>
  </div>
);

export default Leftpanel;
