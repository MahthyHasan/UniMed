import React from 'react';
import "../../../../Css/Patient/Button.css";
import Form from "./Form";

const Button = () => {

  const handleButtonClick = () => {
    const baseUrl = window.location.origin; // Get the base URL of the current page
    window.open(baseUrl + '/ComponentsPatientDashboard/Form.js', '_blank');
  };
  

  return (
    <div>
      <button className="custom-button" onClick={handleButtonClick}>
      General Checkup
      </button>
    <br></br>
    <hr></hr>
    
    <button className="custom-button" onClick={handleButtonClick}>
      Request Medical Report
    </button>
  </div>
  );
};

export default Button;
