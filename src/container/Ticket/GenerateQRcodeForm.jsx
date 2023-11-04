import React, { useState, useEffect } from 'react';
import './GenerateQRcodeForm.css';
import axios from 'axios';// Import Firebase// Import Firebase Authentication
import { auth } from '../../container/Log/config';

const GenerateQRcodeForm = () => {
  const [formData, setFormData] = useState({
    ticketType: '',
    qrCodeLocation: '',
    numberOfTickets: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerateQRCode = async(e) => {
    // Check if a user is logged in
    e.preventDefault()
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
    
      // User is logged in, retrieve their email
      const userEmail = user.email;

      // Include the user's email in the formData
      const dataToSend = {
        ...formData,
        userEmail,
      };

      // Send the updated formData to the Laravel backend
      axios
      .post('https://nice-williams.34-81-183-3.plesk.page', dataToSend)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  

      unsubscribe();
    }
  })
  
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
              <select
                id="ticketType"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
              >
                <option value="">Select Ticket Type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="qrCodeLocation">QR Code Location:</label>
              <select
                id="qrCodeLocation"
                name="qrCodeLocation"
                value={formData.qrCodeLocation}
                onChange={handleChange}
              >
                <option value="">Select Location</option>
                <option value="right-top">Right-Top</option>
                <option value="right-middle">Right-Middle</option>
                <option value="right-center">Right-Center</option>
              </select>
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

            <div className="button-group">
              <button type="button" onClick={handleGenerateQRCode}>
                Generate QR Code
              </button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default GenerateQRcodeForm;
