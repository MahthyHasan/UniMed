import React from "react";
import patient from "../../../../assets/icons/patient.svg";
import barcode from "../../../../assets/icons/barcode.svg";
import "../../../../Css/Pharmacist/DashBoard/ScancardNew.css"; // Import CSS here

export const Scancard = () => {
  // Define the function to handle the click event
  const handleCardClick = () => {
    console.log(
      "Card clicked! This will initiate the QR code scanning functionality."
    );
  };

  return (
    <div className="student-id-card">
      <div className="student-id-card1">
        <div className="action-text1">Attend New Patient</div>
        <div className="icon-container1">
          <img src={barcode} alt="patient" className="barcode-icon" />
        </div>
        <div className="scan-barcode1">
          <button type="button" className="scan-barcode-button">
            Scan Barcode
          </button>
        </div>
      </div>
    </div>
  );
};
