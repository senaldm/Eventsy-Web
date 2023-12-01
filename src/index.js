import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TicketHome  from './TicketHome';
import PrivacyAndPolicy from './PrivacyAndPolicy';
import TermAndCondition from './TermAndCondition';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
ReactDOM.render(
 <Router>
    <Routes>
        <Route path = "/" element={<App/>}/>
        <Route path ="/ticket" element = {<TicketHome/>}/>
        <Route path ="/privacyandpolicy" element={<PrivacyAndPolicy/>}/>
        <Route path ="/termandcondition" element={<TermAndCondition/>}/>
    </Routes>
 </Router>
,document.getElementById('root'));

