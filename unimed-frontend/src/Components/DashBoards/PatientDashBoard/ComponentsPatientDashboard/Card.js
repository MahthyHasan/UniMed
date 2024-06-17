import React from "react";
import patient from "../../../../assets/icons/patient.svg";
import totalpatient from "../../../../assets/icons/totalpatient.svg";
import hours from "../../../../assets/icons/hours.svg";
import "../../../../Css/Pharmacist/DashBoard/Card.css";

export const Card = () => {
  return (
    <div className="card--container">
      <div className="card card-remaining">
        <div className="card--title">
          <h6>Remaining Prescriptions</h6>
        </div>
        <div className="card--icon">
          <img src={totalpatient} alt="patient" className="input-label-icon" />
        </div>
        <div className="card--data">
          <h3>10</h3>
        </div>
      </div>
      <div className="card card-total">
        <div className="card--title">
          <h6>Complete Prescriptions</h6>
        </div>
        <div className="card--icon">
          <img src={totalpatient} alt="patient" className="input-label-icon" />
        </div>
        <div className="card--data">
          <h3>20</h3>
        </div>
      </div>
      <div className="card card-hours1">
        <div className="card--title">
          <h6>Total patient Count in the counter</h6>
        </div>
        <div className="card--icon">
          <img src={patient} alt="hours" className="input-label-icon" />
        </div>
        <div className="card--data">
          <h3>10</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
