import React, { useState } from 'react';
import './DefaultTicketSketch.css';

const DefaultTicketSketch = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [contentEditable, setContentEditable] = useState(false);
  const [EventName, setEventName] = useState('Demo');
  const [eventDescription, setEventDescription] = useState('Add Event Description, tagline, or any other useful information');
  const [startDate, setStartDate] = useState('Start Date and Time');
  const [endDate, setEndDate] = useState('End Date and Time');
  const [venue, setVenue] = useState('Venue');
  const [termsAndConditions, setTermsAndConditions] = useState('Add important notes, Terms & Conditions, ticket transfer, and refund policy');

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

  const ticketMainContentStyle = {
    backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
  };

  return (
    <div className="Main-back">
      <div className="ticket-main-border">
        <div className="ticket-second-border">
          <div className="ticket-third-border">
            <div className="ticket-main-content" style={ticketMainContentStyle}>
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
                      {startDate}
                    </span>
                    <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleContentEdit('startDate')}></i>
                    <span> | </span>
                    <span
                      contentEditable={contentEditable === 'endDate'}
                      className="editable-text end-date"
                      style={{ fontSize: '17px' }}
                    >
                      {endDate}
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
                  {contentEditable === 'termsAndConditions' && (
                    <div className="save-button">
                      <button onClick={handleContentSave}>Save</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ticket-Qr-code">{/* Add content for QR code section */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTicketSketch;
