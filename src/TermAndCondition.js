import React from 'react';
import { Navbar } from './components';
import TermandConditionBody  from './container/TermAndCondition/TermandCondition';
import './PrivacyAndPolicy.css';

const PrivacyAndPolicy = () => (
  <div className="privacy-home-container">
    <Navbar />
    <div className="privacy-content">
      <div className='privacy-main-content'>
      <TermandConditionBody/>
      </div>
    </div>
  </div>
);

export default PrivacyAndPolicy;
