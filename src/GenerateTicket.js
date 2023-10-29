import React, { useState } from 'react';
import TicketForm from '../components/TicketForm';
import TicketDesign from '../components/TicketDesign';

function GenerateTicket() {
  const [ticketData, setTicketData] = useState(null);

  const handleFormSubmit = (formData) => {
    // Store the ticket data
    setTicketData(formData);
  };

  return (
    <div>
      <TicketForm onSubmit={handleFormSubmit} />
      {ticketData && <TicketDesign ticketData={ticketData} />}
    </div>
  );
}

export default GenerateTicket;
