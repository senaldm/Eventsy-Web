import React, { useState } from 'react';
import './TicketForm.css';

const TicketForm = () => {
  const [event, setEvent] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [qrCodeSize, setQrCodeSize] = useState('');
  const [qrCodeLocation, setQrCodeLocation] = useState('bottom-left');
  const [numOfTickets, setNumOfTickets] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleGenerateTicket = () => {
    // Implement ticket generation logic here

    // Set formSubmitted to true to show the check icon
    setFormSubmitted(true);
  };

  return (
    <div className={`ticket-form ${formSubmitted ? 'hidden' : ''}`}>
      <h2 className='ticketheader'>Create Ticket</h2>
      <form>
        <div className="form-group">
          <label htmlFor="event">Event Name</label>
          <input
            type="text"
            id="event"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ticketType">Ticket Type</label>
          <input
            type="text"
            id="ticketType"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qrCodeSize">QR Code Size</label>
          <input
            type="text"
            id="qrCodeSize"
            value={qrCodeSize}
            onChange={(e) => setQrCodeSize(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qrCodeLocation">QR Code Location</label>
          <select
            id="qrCodeLocation"
            value={qrCodeLocation}
            onChange={(e) => setQrCodeLocation(e.target.value)}
          >
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-center">Bottom Center</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="numOfTickets">No of tickets</label>
          <input
            type="number"
            id="numOfTickets"
            value={numOfTickets}
            onChange={(e) => setNumOfTickets(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={handleGenerateTicket}>
            Generate Ticket
          </button>
          <button type="button">Cancel</button>
        </div>
      </form>
      {formSubmitted && (
        <i className="fas fa-check-circle"></i>
      )}
    </div>
  );
};

export default TicketForm;
