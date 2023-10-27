import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app_aboutus_app_bg' id="about-us">
    <div className='about_content'>
      <img src={images.about} alt='Event Planner' className='about_image' />
      <div>
        <h1 className='headtext_cormaortant'>About Us</h1>
        <p className='p_opensans'>
          We are passionate about making your special moments truly memorable. With a team of dedicated event planners, we create unforgettable experiences for every occasion, from weddings and corporate events to parties and conferences.
        </p>
        <p className='p_opensans'>
          Our mission is to bring your ideas to life and ensure that every detail of your event is meticulously planned and executed. Let us turn your vision into a reality and make your event an extraordinary one.
        </p>
        <a href='#contact' className='btn_primary'>Contact Us</a>
      </div>
    </div>
  </div>
);

export default AboutUs;
