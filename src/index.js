import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TicketHome  from './TicketHome';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
ReactDOM.render(
 <Router>
    <Routes>
        <Route path = "/" element={<App/>}/>
        <Route path ="/ticket" element = {<TicketHome/>}/>
    </Routes>
 </Router>
,document.getElementById('root'));

