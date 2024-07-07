import React, { useState, useEffect } from 'react';
import { generateQRCodetest } from '../../DoctorDashBoard/ComponentsDoctorDashboard/GenerateQRCode';
import '../../../../Css/Patient/QR.css';

export default function QRGenerator() {
  const [imageUrl, setImageUrl] = useState('');
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

  return (
    <div className="notification">      
      <div className="notititle justify-content-center">Your Qr code</div>
      <div className="notibody">
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
