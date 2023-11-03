import React, { useState } from 'react';
import './TicketPageBody.css';
import 'font-awesome/css/font-awesome.min.css';
import TicketForm from './TicketForm';
import DefaultTicketSketch from './DefaultTicketSketch';
import GenerateQRcodeForm from './GenerateQRcodeForm'; // Import the QR code form

const TicketPageBody = () => {
  const [showCreateTicketForm, setShowCreateTicketForm] = useState(false);
  const [showDesignTicket, setShowDesignTicket] = useState(false);
  const [editIcon, setEditIcon] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [showUploadOwn, setShowUploadOwn] = useState(true);
  const [showDefaultTicket, setShowDefaultTicket] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [showEventDetailsButton, setShowEventDetailsButton] = useState(false);
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  const [showEventDetailsForm, setShowEventDetailsForm] = useState(false);

  const [showQRCodeForm, setShowQRCodeForm] = useState(false); // New state for QR code form
  const [isPlusIconQR, setIsPlusIconQR] = useState(true);
  const [showDoneButton, setshowDoneButton] = useState(false);
  const [showcancelButton, setshowcancelButton] = useState(false);

  const [formData, setFormData] = useState(null);
  const handleFormSubmit = (formData) => {
    // Set the form data to local state
    setFormData(formData);
    // Extract the saved default ticket image URL from the savedData object
    if (formData && formData.savedData) {
      setSavedDefaultTicketImageURL(formData.savedData.selectedImage);
    }
  };
  
  const toggleCreateTicketForm = () => {
    if (showCreateTicketForm) {
      setShowCreateTicketForm(false);
      setShowDesignTicket(false);
      setShowEventDetailsButton(false);
      setEditIcon(false);
      setShowCheckIcon(false);
      setIsPlusIcon(true);
      setshowDoneButton(false);
      setshowcancelButton(false);
    } else {
      setShowCreateTicketForm(false);
      setShowDesignTicket(true);
      setShowEventDetailsButton(true);
      setEditIcon(false);
      setShowCheckIcon(false);
      setIsPlusIcon(false);
      setshowDoneButton(true);
      setshowcancelButton(true);
    }
  };

  const toggleCreateTicketForm2 = () => {
    if (showCreateTicketForm) {
      setShowCreateTicketForm(false);
      setIsPlusIcon(true);
    } else {
      setShowCreateTicketForm(true);
      setShowDesignTicket(true);
    }
  };

  const toggleDesignTicket = () => {
    setShowDesignTicket(!showDesignTicket);
  };

  const toggleEditIcon = () => {
    setEditIcon(!editIcon);
  };

  const handleGenerateTicket = () => {
    setEditIcon(true);
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

  const toggleEventDetailsForm = () => {
    setShowEventDetailsForm(!showEventDetailsForm);
  };

  const toggleQRCodeForm = () => {
    setShowQRCodeForm(!showQRCodeForm);
    setIsPlusIconQR(!isPlusIconQR);
  };
  const [showSavedDefaultTicket, setShowSavedDefaultTicket] = useState(false); // New state for showing saved default ticket
  const toggleSavedDefaultTicket = () => {
    console.log('Toggling showSavedDefaultTicket');
    setShowSavedDefaultTicket(!showSavedDefaultTicket);
  };
  const [savedDefaultTicketImageURL, setSavedDefaultTicketImageURL] = useState('');
  const [showcreatepopup,setshowcreatepopup] =useState(false);
  const closepopup = () =>{
    setshowcreatepopup(false);
  }
  return (
    <div className="ticket-page-body">
      <h2 className="mainbodyheader">Create Ticket</h2>
      <div className="create-ticket">
        <div className="create-ticket-header">
          <span>Create Ticket</span>
          <i
            className={isPlusIcon ? 'fa fa-plus-circle' : 'fa fa-minus-circle'}
            onClick={toggleCreateTicketForm}
          ></i>
        </div>
        {showEventDetailsButton && (
          <button type='button' onClick={toggleCreateTicketForm2} style={{ backgroundColor: 'blue', margin: '40px' }}>
            Event Details
          </button>
        )}
        {showEventDetailsForm && (
          <div className="event-details-form">
            {/* Your event details form components here */}
          </div>
        )}
        {showCreateTicketForm && !editIcon && (
          
            <div className="popup-form-content">
              <div className="scrollable-content">
                <TicketForm handleGenerateTicket={handleGenerateTicket} onFormSubmit={handleFormSubmit} onClick={closepopup}/>
              </div>
      
          </div>
        )}
        {showDesignTicket && !editIcon && (
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
                    <span className="upload-own-image-button" style={{fontFamily:'cursive'}}>Upload Own Image</span>
                  </label>
        )}
                {showDefaultTicket && (
                  <button className="default-ticket-button" onClick={toggleDefaultTicketSketch} style={{fontFamily:'cursive'}}>
                    Default Ticket
                  </button>
                  

        )}
       <i className="fa fa-eye" aria-hidden="true" onClick={toggleSavedDefaultTicket}></i>
       
              </div>
              {showSavedDefaultTicket && (
  <div>
    <img src={savedDefaultTicketImageURL} alt="Saved Default Ticket" />
  </div>
)}


             {showDefaultTicketSketch && <DefaultTicketSketch formData={formData} savedDefaultTicketImageURL={savedDefaultTicketImageURL} />}

                 
                
           
            </div>
           
          </div>
        )}
          
      </div>
      <div className='main-Qr'>
        <div className="generate-Qr-header">
          <span>Generate QR code </span>
          <button type='button' onClick={toggleQRCodeForm}>Generate QR code</button>
        </div>
        {showQRCodeForm && 
         <div className="popup-form-content">
         <div className="scrollable-content">
          <GenerateQRcodeForm />
          </div>
          </div>
          }
      </div>

      <button type='button'> Show the Generated Ticket</button>
    </div>
  );
};

export default TicketPageBody;
