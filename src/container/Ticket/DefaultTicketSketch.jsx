import React, { useState,mainRef ,useEffect} from 'react';
import { ChromePicker } from 'react-color'; 
import './DefaultTicketSketch.css';
import html2canvas from 'html2canvas';

const DefaultTicketSketch = ({ formData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [contentEditable, setContentEditable] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(''); // State for background color
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [qrCodeSpaceColor, setQrCodeSpaceColor] = useState(''); 
  const [showSketch, setShowSketch] = useState(true);
  const [showbutton, setshowbutton] = useState(true);
  const EventName = formData ? formData.event : 'Demo';
  const eventDescription = formData ?formData.eventDescription:'Add Event Description, tagline, or any other useful information';
  const startDate = formData ? formData.startEndDateTime.start : 'Start Date and Time';
  const endDate = formData ? formData.startEndDateTime.end : 'End Date and Time';
  const venue = formData ? formData.venue : 'Venue';
  const termsAndConditions = formData? formData.termsAndConditions:'Add important notes, Terms & Conditions, ticket transfer, and refund policy';
  const formattedStartDate = startDate instanceof Date ? startDate.toLocaleString() : startDate;
  const formattedEndDate = endDate instanceof Date ? endDate.toLocaleString() : endDate;
  // State for QR code space color
  const [ticketData, setTicketData] = useState({
    selectedImage: null,
    contentEditable: false,
    EventName: formData ? formData.event : 'Demo',
    eventDescription: 'Add Event Description, tagline, or any other useful information',
    startDate: formData ? formData.startEndDateTime.start : 'Start Date and Time',
    endDate: formData ? formData.startEndDateTime.end : 'End Date and Time',
    venue: formData ? formData.venue : 'Venue',
    termsAndConditions: 'Add important notes, Terms & Conditions, ticket transfer, and refund policy',
    formattedStartDate: '',
    formattedEndDate: '',
    backgroundColor: '',
    qrCodeSpaceColor: '',
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleContentEdit = (field) => {
    setContentEditable(field);
  };

  const handleContentSave = () => {
    setContentEditable(false);
  };


  const ticketBorderStyle = {
    backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
  };

  const handleToggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleQrCodeSpaceColorChange = (color) => {
    setQrCodeSpaceColor(color.hex);
  };
  
  const [showSavedTicket, setShowSavedTicket] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [finalTicketImage, setFinalTicketImage] = useState(null);
  const saveAndCaptureImage = () => {
    const savedData = {
      backgroundColor,
      qrCodeSpaceColor,
      selectedImage,
      EventName,
      eventDescription,
      startDate,
      endDate,
      venue,
      termsAndConditions,
      formattedStartDate,
      formattedEndDate,
    };
  
    setTicketData(savedData);
    setShowSavedTicket(true);
    setShowSketch(false);
    setshowbutton(false);
  
    // Wait for the next frame to make sure the finalTicket element is attached to the DOM
    requestAnimationFrame(() => {
      const finalTicket = document.querySelector('.ticket-main-border');
      
      if (finalTicket) {
        html2canvas(finalTicket).then((canvas) => {
          const image = canvas.toDataURL('image/png');
          console.log('Captured image data:', image); // Add this line to log the image data
          setFinalTicketImage(image);
        });
      } else {
        console.error("The finalTicket element is not found in the DOM.");
      }
    });
  };
  
  const resetFinalTicketImage = () => {
    setFinalTicketImage(null);
  };

  
  return (
    <div className="Main-back"   ref={mainRef}>
        {showSketch && (
        <div className="ticket-main-border" style={{ backgroundColor: backgroundColor }} onClick={handleToggleColorPicker}>
          <div className="ticket-second-border" style={ticketBorderStyle}>
            <div className="ticket-main-content" style={{ backgroundColor: selectedImage ? 'transparent' : 'antiquewhite' }}>

              <div className="image-uploader">
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
                <label htmlFor="imageInput" id="cameraIcon" className="camera-icon">
                  <i class="fa fa-camera" aria-hidden="true" style={{ color: 'rgb(190, 187, 187)', margin: '2px', fontSize: '20px' }}></i>
                </label>
              </div>
              <div className="ticket-info">
                <div className="Event-Name">
                  <span
                    contentEditable={contentEditable === 'eventName'}
                    className="editable-text event-name"
                    style={{ fontSize: '20px', paddingBottom: '50px', paddingLeft: '30px' }}
                  >
                    {EventName}
                  </span>
                  <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleContentEdit('eventName')}></i>
                </div>
                <div className="Event-Description">
                  <span
                    contentEditable={contentEditable === 'eventDescription'}
                    className="editable-text event-description"
                    style={{ fontSize: '', color: 'grey' }}
                  >
                    {eventDescription}
                  </span>
                  <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleContentEdit('eventDescription')}></i>
                </div>
                <div className="Time-Date" style={{ margin: '6px' }}>
                  <div>
                    <span
                      contentEditable={contentEditable === 'startDate'}
                      className="editable-text start-date"
                      style={{ fontSize: '17px' }}
                    >
                      {formattedStartDate}
                    </span>
                    <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleContentEdit('startDate')}></i>
                    <span> | </span>
                    <span
                      contentEditable={contentEditable === 'endDate'}
                      className="editable-text end-date"
                      style={{ fontSize: '17px' }}
                    >
                      {formattedEndDate}
                    </span>
                    <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleContentEdit('endDate')}></i>
                  </div>
                </div>
                <div className="Venue">
                  <span
                    contentEditable={contentEditable === 'venue'}
                    className="editable-text venue"
                    style={{ fontSize: '17px' }}
                  >
                    {venue}
                  </span>
                  <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleContentEdit('venue')}></i>
                </div>
                <div className="ticket-term-conditions">
                  <p>
                    <span
                      contentEditable={contentEditable === 'termsAndConditions'}
                      className="editable-text terms-and-conditions"
                    >
                      {termsAndConditions}
                    </span>
                    <i
                      className="fa fa-pencil"
                      aria-hidden="true"
                      onClick={() => handleContentEdit('termsAndConditions')}
                    ></i>
                  </p>
                 
                </div>
              </div>
            </div>
            {showColorPicker && (
            <div className="color-picker">
              <ChromePicker color={backgroundColor} onChange={handleColorChange} />
            </div>
          )}
          {showColorPicker && (
            <div className="qr-code-color-picker">
              <ChromePicker color={qrCodeSpaceColor} onChange={handleQrCodeSpaceColorChange} />
            </div>
          )}
            <div className="ticket-Qr-code" style={{ backgroundColor: qrCodeSpaceColor }} onClick={handleToggleColorPicker}>
              {/* Add content for QR code section */}
            </div>
          </div>
         
        </div>
        )}
        {(showbutton && !finalTicketImage) && (
        <div style={{ margin: '30px' }}>
          <button style={{ marginRight: '30px' }} onClick={saveAndCaptureImage}>
            Confirm
          </button>
          <button onClick={resetFinalTicketImage}>Cancel</button>
        </div>
      )}

{finalTicketImage && (
  <div>
    <img src={finalTicketImage} alt="Final Ticket" />
    <button onClick={resetFinalTicketImage}>Go Back</button>
  </div>
)}

    </div>
    
  );
};

export default DefaultTicketSketch;
