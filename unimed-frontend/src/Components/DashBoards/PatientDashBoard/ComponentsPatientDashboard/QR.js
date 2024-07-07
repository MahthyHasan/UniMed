import React, { useState, useEffect } from 'react';
import { generateQRCodetest } from '../../DoctorDashBoard/ComponentsDoctorDashboard/GenerateQRCode';
import '../../../../Css/Patient/QR.css';
import QRModal from './QRModal';

export default function QRGenerator() {
  const [imageUrl, setImageUrl] = useState('');
  const [showQRModal, setShowQRModal] = useState(false);
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

  const handleShowQRModal = () => {
    setShowQRModal(true);
  };

  const handleCloseQRModal = () => {
    setShowQRModal(false);
  };

  return (
    <div className="notification">
      <div className="notititle justify-content-center">Your QR Code</div>
      <div className="notibody">
        <button className="playstore-button" onClick={handleShowQRModal}>
          My QR Code
        </button>
        <QRModal show={showQRModal} onClose={handleCloseQRModal} imageUrl={imageUrl} />
      </div>
    </div>
  );
}
