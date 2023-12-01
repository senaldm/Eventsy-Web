import React from 'react';
import { Navbar } from './components';
import Leftpanel from './container/Ticket/Leftpanel';
import PrivacyAndPolicyBody  from './container/PrivacyAndPolicy/PrivacyandPolicyBody';
import './PrivacyAndPolicy.css';

const PrivacyAndPolicy = () => (
  <div className="privacy-home-container">
    <Navbar />
    <div className="privacy-content">
      <div className='privacy-main-content'>
      <PrivacyAndPolicyBody/>
      </div>
    </div>
  </div>
);

export default PrivacyAndPolicy;
