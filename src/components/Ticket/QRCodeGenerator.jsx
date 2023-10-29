import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator({ ticketData }) {
  return (
    <div>
      <QRCode value=''/>
    </div>
  );
}

export default QRCodeGenerator;
