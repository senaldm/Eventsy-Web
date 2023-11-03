import React, { useState } from 'react';
import './GenerateQRcodeForm.css';

const GenerateQRcodeForm = () => {
  const [formData, setFormData] = useState({
    ticketType: '',
    qrCodeSize: '',
    qrCodeLocation: '',
    numberOfTickets: '',
    heightInPixels: '',
    widthInPixels: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerateQRCode = () => {
    // Add your QR code generation logic here
    // You can access the form data in the formData state
  };
  const [showForm, setShowForm] = useState(true);
  
  return (
    <div>
      {showForm && (
    <div className="generate-qr-code-form">
      <h3>Generate QR Code</h3>
      <form>
        <div className="form-group">
          <label htmlFor="ticketType">Ticket Type:</label>
          <input
            type="text"
            id="ticketType"
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qrCodeSize">QR Code Size:</label>
          <input
            type="text"
            id="qrCodeSize"
            name="qrCodeSize"
            value={formData.qrCodeSize}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qrCodeLocation">QR Code Location:</label>
          <input
            type="text"
            id="qrCodeLocation"
            name="qrCodeLocation"
            value={formData.qrCodeLocation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="heightInPixels">Height (in pixels):</label>
          <input
            type="number"
            id="heightInPixels"
            name="heightInPixels"
            value={formData.heightInPixels}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="widthInPixels">Width (in pixels):</label>
          <input
            type="number"
            id="widthInPixels"
            name="widthInPixels"
            value={formData.widthInPixels}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={handleGenerateQRCode}>
            Generate QR Code
          </button>
          <button type="button" onClick={()=> {setShowForm(false)}}>Cancel</button>
        </div>
      </form>
    </div>
      )}
    </div>
  );
};

export default GenerateQRcodeForm;
