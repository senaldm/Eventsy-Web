import React, { useState } from 'react';
import './TicketPageBody.css';
import 'font-awesome/css/font-awesome.min.css';
import TicketForm from './TicketForm';
import DefaultTicketSketch from './DefaultTicketSketch'; // Import the DefaultTicketSketch component

const TicketPageBody = () => {
  const [showCreateTicketForm, setShowCreateTicketForm] = useState(false);
  const [showDesignTicket, setShowDesignTicket] = useState(false);
  const [editIcon, setEditIcon] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [showUploadOwn, setShowUploadOwn] = useState(true);
  const [showDefaultTicket, setShowDefaultTicket] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);

  const toggleCreateTicketForm = () => {
    setShowCreateTicketForm(!showCreateTicketForm);
    setShowDesignTicket(false);
    setEditIcon(false);
    setShowCheckIcon(false);
  };

  const toggleDesignTicket = () => {
    setShowDesignTicket(!showDesignTicket);
    setShowCreateTicketForm(false);
    setEditIcon(false);
    setShowCheckIcon(false);
  };

  const toggleEditIcon = () => {
    setEditIcon(!editIcon);
  };

  const handleGenerateTicket = () => {
    // Implement ticket generation logic here

    // Set editIcon to true to change the icon to the edit icon
    setEditIcon(true);

    // Hide the form and show the check icon
    setShowCreateTicketForm(false);
    setShowCheckIcon(true);
  };

  const handleUploadOwn = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setShowUploadOwn(false);
      setShowDefaultTicket(false);
    }
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
    setShowUploadOwn(true);
    setShowDefaultTicket(true);
  };

  const [showDefaultTicketSketch, setShowDefaultTicketSketch] = useState(false);

  const toggleDefaultTicketSketch = () => {
    setShowDefaultTicketSketch(!showDefaultTicketSketch);
  };

  return (
    <div className="ticket-page-body">
      <h2 className="mainbodyheader">Create Ticket</h2>
      <div className="create-ticket">
        <div className="create-ticket-header">
          <span>Create Ticket</span>
          {showCheckIcon ? (
            <i className="fas fa-check-circle" aria-hidden="true"></i>
          ) : editIcon ? (
            <i className="fas fa-pencil-alt" onClick={toggleCreateTicketForm}></i>
          ) : (
            <i className="fa fa-plus-circle" onClick={toggleCreateTicketForm}></i>
          )}
        </div>
        {showCreateTicketForm && !editIcon && (
          <div className="popup-form">
            <div className="popup-form-content">
              <div className="scrollable-content">
                <TicketForm handleGenerateTicket={handleGenerateTicket} />
              </div>
            </div>
          </div>
        )}
      </div>

      <h2>Design Ticket</h2>
      <div className="design-ticket">
        <div className="design-ticket-header">
          <span>Design Ticket</span>
        </div>
        <div className="image-upload-section">
          {uploadedImage && (
            <div className="uploaded-image-container">
              <img src={uploadedImage} alt="Uploaded Ticket" />
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={handleDeleteImage}
              ></i>
            </div>
          )}
          <div className="buttons">
            {!uploadedImage && showUploadOwn && (
              <label className="upload-own-button">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadOwn}
                  style={{ display: 'none' }}
                />
                <span className="upload-own-image-button">Upload Own Image</span>
              </label>
            )}
            {showDefaultTicket && (
              <button className="default-ticket-button" onClick={toggleDefaultTicketSketch}>
                Default Ticket
              </button>
            )}
          </div>
        </div>
      </div>
      {showDefaultTicketSketch && <DefaultTicketSketch />}
    </div>
  );
};

export default TicketPageBody;
