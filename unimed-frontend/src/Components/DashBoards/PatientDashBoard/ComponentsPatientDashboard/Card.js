import React from "react";
import Button from "./Button"; 
import patientIcon from "../../../../assets/icons/patient.svg";
import "../../../../Css/Patient/Card.css";

const Card = () => {
  return (
    <div className="card--container">
      {/* Doctor Availability Card */}
      <div class="card">
        <div class="card-header">
          Doctor Availability
        </div>
        <div class="card-body">
          <div class="availability-status available">
            <span>Available</span>
          </div>
        </div>
      </div>

      {/* Appointment Details Card */}
      <div class="availability-card">
        <div class="availability-header">
          Appointment Details
        </div>
        <div class="availability-body">
          <p><strong>Date:</strong> July 15, 2024</p>
          <p><strong>Time:</strong> 10:00 AM</p>
        </div>
      </div>

      {/* Integrating Button component */}
      <div className="button-container">
        <Button onClick={() => console.log("Button clicked from Card.js")} />
      </div>
    </div>
  );
};

export default Card;
