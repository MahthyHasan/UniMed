import React from "react";
import patientIcon from "../../../../assets/icons/patient.svg";
import "../../../../Css/Patient/Card.css";

export const Card = () => {
  return (
    <div className="card--container">
      <div className="card card-total">
        <div className="card--title">
          <h6>Doctor is Available</h6>
        </div>
      </div>
      <div className="card card-hours1">
        <div className="card--title">
          <h6>Ongoing Consultation Number</h6>
        </div>
        <div className="card--icon">
          <img src={patientIcon} alt="Ongoing Consultation" className="input-label-icon" />
          <h3>&nbsp;&nbsp;10</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
