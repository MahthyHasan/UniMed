import React, { useState, useEffect } from 'react';
import { generateQRCodetest } from '../../DoctorDashBoard/ComponentsDoctorDashboard/GenerateQRCode';
import '../../../../Css/Patient/QR.css';

export default function QRGenerator() {
  const [imageUrl, setImageUrl] = useState('');
  const [showQR, setShowQR] = useState(false);
  const userID = localStorage.getItem("user_Id");

  useEffect(() => {
    const fetchUserBio = async () => {
      try {
        const response = await fetch(`http://localhost:8088/api/v1/user/bio/${userID}`);
        if (response.ok) {
          const data = await response.json();
          const text = data.nic;
          if (text && text.trim() !== '') {
            generateQRCodetest(text, setImageUrl);
          }
        } else {
          console.error("User Bio not found");
        }
      } catch (error) {
        console.error("Error fetching user bio:", error);
      }
    };

    fetchUserBio();
  }, [userID]);

  const handleShowQR = () => {
    setShowQR(true);
  };

  const handleCloseQR = () => {
    setShowQR(false);
  };

  return (
    <div className="notification">
      <div className="notititle justify-content-center">Your QR Code</div>
      <div className="notibody">
        {!showQR && (
          <button className="playstore-button" onClick={handleShowQR}>
            My QR Code
          </button>
        )}
        {showQR && imageUrl && (
          <div className="qr-code-container">
            <button className="btn-close" onClick={handleCloseQR}><span></span></button>
            <div className="download-text">Click to Download</div>
            <a href={imageUrl} download>
              <img src={imageUrl} alt="QR Code" className="qr-code-image" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
