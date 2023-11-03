import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './TicketForm.css';

const TicketForm = ({onFormSubmit }) => {
  const [event, setEvent] = useState('');
  const [venue, setVenue] = useState('');
  const [eventDescription,seteventDescription] = useState("");
  const [termsAndConditions,settermsandConditions] =useState("");
  const [startEndDateTime, setStartEndDateTime] = useState({
    start: null,
    end: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create an object to store the form data
    const formData = {
      event,
      venue,
      startEndDateTime,
      eventDescription,
      termsAndConditions,
    };
    onFormSubmit(formData);
    // You can do further processing with formData, like sending it to an API, or saving it to local state or context.

    // Set formSubmitted to true to show the check icon
    setFormSubmitted(true);
  };

  return (
    <div>
    {showForm && (
    <div className={`ticket-form ${formSubmitted ? 'hidden' : ''}`}>
      <h2 className='ticketheader'>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="venue">Event Venue</label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>
         
        <div className="form-group">
          <label htmlFor="startEndDateTime">Event Start Date & Time</label>
          <DatePicker
            selected={startEndDateTime.start}
            onChange={(date) =>
              setStartEndDateTime({ ...startEndDateTime, start: date })
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select Start Date & Time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="startEndDateTime">Event End Date & Time</label>
          <DatePicker
            selected={startEndDateTime.end}
            onChange={(date) =>
              setStartEndDateTime({ ...startEndDateTime, end: date })
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select End Date & Time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventdescription">Event Description</label>
          <input
            type="text"
            id="eventdescription"
            value={eventDescription}
            onChange={(e) => seteventDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="termsandconditions">Terms and Conditions</label>
          <input
            type="text"
            id="termandconsditions"
            value={termsAndConditions}
            onChange={(e) => settermsandConditions(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit">Create Ticket</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      </form>
    </div>
    )};
    </div>
  );
};

export default TicketForm;
