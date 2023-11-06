import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './MainServices.css';
import { images } from '../../constants';

const MainServices = () => (
  <div className='service_container' id='main-service'>
    <div className='item'>
      <div className="circle">
        <i className="fa fa-lightbulb-o icon" aria-hidden="true"></i>
      </div>
      <h1 className='main-text'>Ideas about Designing</h1>
      <hr className='line'/>
      <p>We offer you the  search service to search on image design. </p>
    </div>
    <div className='item'>
      <div className="circle">
        <i className="fa fa-handshake-o icon" aria-hidden="true"></i>
      </div>
      <h1  className='main-text'>Connect with Best Planners</h1>
      <hr className='line'/>
      <p>We gather all the planners ,photographers and all other event managers for you to one place.</p>
    </div>
    <div className='item'>
      <div className="circle">
        <i className="fa fa-calendar icon" aria-hidden="true"></i>
      </div>
      <h1  className='main-text'>Keep Your Own Planning</h1>
      <hr className='line'/>
      <p>We are providing best place to plan and keep you own things.</p>
    </div>
    <div className='item'>
      <div className="circle">
        <i className="fa fa-ticket icon" aria-hidden="true"></i>
      </div>
      <h1  className='main-text'>Manage Event Tickets</h1>
      <hr className='line'/>
      <p>Offering a free service to create creative  tickets and validate tickets securely.</p>
    </div>
  </div>
);

export default MainServices;
