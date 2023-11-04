import React,{useState} from 'react';
import './Leftpanel.css';
import 'font-awesome/css/font-awesome.min.css';

const Leftpanel = () => {
  const [showCreateTicketForm, setShowCreateTicketForm] = useState(false);

  const toggleCreateTicketForm = () => {
    setShowCreateTicketForm(!showCreateTicketForm);
  };
return (
  <div className="left-panel">
    <div className="panel-item">
    <i class="fa fa-ticket" aria-hidden="true" onClick ={toggleCreateTicketForm } ></i>  Create Ticket 
    </div>
    <div className="panel-item">
    <i class="fa fa-qrcode" aria-hidden="true"></i> Generate QR Code
    </div>
    <div className='panel-item'>
    <i class="fa fa-home" aria-hidden="true"></i>
      <a href="/">Home</a>
    </div>
   
  </div>
);
}
export default Leftpanel;
