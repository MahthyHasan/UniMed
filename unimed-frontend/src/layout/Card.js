import React from "react";
import patient from "../assets/icons/patient.svg";
import totalpatient from "../assets/icons/totalpatient.svg";
import hours from "../assets/icons/hours.svg";



export const Card = () => {
  return (
    <div className="card--container">
      <div className="card card-remaining">
        <div className="card--title">
          <h6>Remaining Patients in Counter</h6>
        </div>
        <div className="card--icon">
          <img src={patient} alt="patient" className="input-label-icon" />
        </div>
        <div className="card--data">
          <h3>10</h3>
        </div>
      </div>
      <div className="card card-total">
        <div className="card--title">
          <h6>Total Channelled Patients</h6>
        </div>
        <div className="card--icon">
          <img src={totalpatient} alt="patient" className="input-label-icon" />
        </div>
        <div className="card--data">
          <h3>20</h3>
        </div>
      </div>
      <div className="card card-hours">
        <div className="card--title">
          <h6>Total Channelled Hours for the Day</h6>
        </div>
        <div className="card--icon">
          <img src={hours} alt="hours" className="input-label-icon" />
        </div>
        <div className="card--data">
          <h3>03:40:23</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
