import React from "react";
import { useNavigate } from "react-router-dom";
import barcode from "../../../../assets/icons/barcode.svg";
import "../../../../Css/Pharmacist/DashBoard/ProvideCard.css";

const ProvideQr = () => {
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
    <div className="padding">
      <div className="card--container10">
        <div className="left-section10">
          <div className="student-id-card10" onClick={handleCardClick}>
            <div className="icon-container10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProvideQr;
