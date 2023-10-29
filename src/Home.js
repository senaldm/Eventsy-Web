import React from 'react';

function Home({ onSelectOption }) {
  return (
    <div>
      <button onClick={() => onSelectOption('generate')}>Generate Ticket</button>
      <button onClick={() => onSelectOption('edit')}>Edit Ticket</button>
    </div>
  );
}

export default Home;
