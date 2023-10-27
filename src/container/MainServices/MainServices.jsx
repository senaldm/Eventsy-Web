import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './MainServices.css';
import { images } from '../../constants';

const MainServices = () => (
  <div className='service_container' id='main-service'>
    <div>
      <div className="circle">
        <i className="fa fa-lightbulb-o icon" aria-hidden="true"></i>
      </div>
      <h1>Ideas about Designing</h1>
      <hr className='line'/>
      <p>We offer free delivery to any American city and abroad for all orders over $99.</p>
    </div>
    <div>
      <div className="circle">
        <i className="fa fa-handshake-o icon" aria-hidden="true"></i>
      </div>
      <h1>Connect with Best Planners</h1>
      <hr className='line'/>
      <p>We accept Visa and MasterCard, PayPal, Trustly, and other payment methods.</p>
    </div>
    <div>
      <div className="circle">
        <i className="fa fa-calendar icon" aria-hidden="true"></i>
      </div>
      <h1>Keep Your Own Planning</h1>
      <hr className='line'/>
      <p>We do not use chemical additives or aggressive fertilizers. Our wines are 100% organic.</p>
    </div>
    <div>
      <div className="circle">
        <i className="fa fa-ticket icon" aria-hidden="true"></i>
      </div>
      <h1>Manage Event Tickets</h1>
      <hr className='line'/>
      <p>Sign up to get a 15% discount on your next order and get an advantage of our special offers.</p>
    </div>
  </div>
);

export default MainServices;
