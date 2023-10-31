import React, { useState } from 'react';
import './TicketPageBody.css';
import 'font-awesome/css/font-awesome.min.css';
import TicketForm from './TicketForm';

const TicketPageBody = () => {
  const [showCreateTicketForm, setShowCreateTicketForm] = useState(false);
  const [showDesignTicket, setShowDesignTicket] = useState(false);
  const [editIcon, setEditIcon] = useState(false);

  const toggleCreateTicketForm = () => {
    setShowCreateTicketForm(!showCreateTicketForm);
    setShowDesignTicket(false);
    setEditIcon(false);
  };

  const toggleDesignTicket = () => {
    setShowDesignTicket(!showDesignTicket);
    setShowCreateTicketForm(false);
    setEditIcon(false);
  };

  const toggleEditIcon = () => {
    setEditIcon(!editIcon);
  };

  const handleGenerateTicket = () => {
    // Implement ticket generation logic here

    // Show the right sign icon after submitting the form
    setEditIcon(true);
  };

  return (
    <div className="ticket-page-body">
      <h2 className='mainbodyheader'>Create Ticket</h2>
      <div className="create-ticket">
        <div className="create-ticket-header">
          <span>Create Ticket</span>
          {editIcon ? (
           <i class="fa fa-check-circle" aria-hidden="true"></i>
          ) : (
            <i className={`fa ${showCreateTicketForm ? 'fas fa-pencil-alt' : 'fa-plus-circle'}`} onClick={toggleCreateTicketForm}></i>
          )}
        </div>
        {showCreateTicketForm && (
          <div className="popup-form">
            <div className="popup-form-content">
              <div className="scrollable-content">
                <TicketForm />
              </div>
            </div>
          </div>
        )}
      </div>

      <h2>Design Ticket</h2>
      <div className="design-ticket">
        <div className="design-ticket-header">
          <span>Design Ticket</span>
          <i className="fas fa-pencil-alt" onClick={toggleDesignTicket}></i>
        </div>
        {showDesignTicket && (
          <div className="ticket-design">
            {/* Include the ticket design sketch here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketPageBody;
