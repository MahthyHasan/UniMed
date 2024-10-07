import React, { useState } from 'react';
import "../../../../Css/Patient/MedicalReq.css";

const MedicalReq = () => {
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const handleClick = () => {
    setShowAlert(true); // Show the alert when the button is clicked
    setTimeout(() => {
      setShowAlert(false); // Hide alert after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <button className="medical-req-button" onClick={handleClick}>
        Request Medical Report
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>

      {showAlert && ( // Conditionally render the alert
        <div className="alert alert-custom" role="alert">
          Successfully Your Request Has Been Submitted.
        </div>
      )}
    </div>
  );
}

export default MedicalReq;


