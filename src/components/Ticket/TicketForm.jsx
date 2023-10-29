import React, { useState } from 'react';

function TicketForm({ onSubmit }) {
  const [formData, setFormData] = useState({/* Your form fields */});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form input fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default TicketForm;
