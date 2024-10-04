import React from "react";
import patientIcon from "../../../../assets/icons/patient.svg";
import "../../../../Css/Patient/Card.css";

const Card = () => {
  return (
    <div className="card--container">

      {/* Appointment Details Card */}
      <div className="availability-card">
        <div className="availability-header">
          Upcoming Appointments        </div>
        <div className="availability-body">
          <p><strong>Date:</strong> July 15, 2024</p>
          <p><strong>Time:</strong> 10:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
