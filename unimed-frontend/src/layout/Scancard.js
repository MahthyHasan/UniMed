import React from "react";
import patient from "../assets/icons/patient.svg";
import barcode from "../assets/icons/barcode.svg";


export const Scancard = () => {
  
// Define the function to handle the click event
  const handleCardClick = () => {
    
    console.log("Card clicked! This will initiate the QR code scanning functionality.");
    
  };

  return (
    <div className="student-id-card">
      <div className="action-text">Attend New Patient</div>
      <div className="icon-container">
        <img src={barcode} alt="patient" className="input-lable-icon" />
      </div>
      <div className="scan-barcode">Scan Barcode</div>
    </div>
  );
};

