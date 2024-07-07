import React, { useState } from 'react';
import { generateQRCodetest } from '../../DoctorDashBoard/ComponentsDoctorDashboard/GenerateQRCode';
import '../../../../Css/Patient/QR.css';

export default function QRGenerator() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerateQRCode = () => {
    if (text.trim() !== '') {
      generateQRCodetest(text, setImageUrl);
    }
  };

  return (
    <div className="notification">
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>
      <div className="notititle">Generate QR Code</div>
      <div className="notibody">
        <div className="input-container">          
        </div>
        {imageUrl && (
          <div className="qr-code-container">
            <a href={imageUrl} download>
              <img src={imageUrl} alt="Qrcode" className="qr-code-image" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
