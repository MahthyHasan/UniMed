import React from "react";
import { useNavigate } from "react-router-dom";
import barcode from "../../../../assets/icons/barcode.svg";
import "../../../../Css/Pharmacist/DashBoard/ScancardNew.css";

export const Scancard = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(
      "Card clicked! This will initiate the QR code scanning functionality."
    );
  };

  const handleBookingClick = () => {
    console.log("Booking time slot button clicked!");
    // Add functionality for booking time slot
  };

  const handleMedicineClick = () => {
    console.log("Provide medicine button clicked!");
    navigate("/ProvideMedicine");
  };

  return (
    <div className="scancard-container">
      <div className="left-section">
        <div className="student-id-card" onClick={handleCardClick}>
          <div className="action-text">Provide Medicine</div>
          <div className="icon-container">
            <img src={barcode} alt="patient" className="input-label-icon" />
          </div>
          <div
            className="scan-barcode provide-medicine"
            onClick={handleMedicineClick}
          >
            Provide Medicine
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="student-id-card" onClick={handleCardClick}>
          <div className="action-text">Book Time Slot</div>
          <div className="icon-container">
            <img src={barcode} alt="patient" className="input-label-icon" />
          </div>
          <div
            className="scan-barcode book-time-slot"
            onClick={handleBookingClick}
          >
            Book Time Slot
          </div>
        </div>
      </div>
    </div>
  );
};
