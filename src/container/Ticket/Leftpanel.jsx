import React from 'react';
import './Leftpanel.css';
import 'font-awesome/css/font-awesome.min.css';
const Leftpanel = () => (
  <div className="left-panel">
    <div className="panel-item">
    <i class="fa fa-ticket" aria-hidden="true"></i> Create Ticket
    </div>
    <div className="panel-item">
    <i class="fa fa-sign-in" aria-hidden="true"></i>   <a href="">Log In </a>
    </div>
    <div className="panel-item">
    <i class="fa fa-user-plus" aria-hidden="true"></i>  <a href="">Sign Up</a>
    </div>
    <div className='panel-item'>
    <i class="fa fa-home" aria-hidden="true"></i>
      <a href="/">Home</a>
    </div>
  </div>
);

export default Leftpanel;
