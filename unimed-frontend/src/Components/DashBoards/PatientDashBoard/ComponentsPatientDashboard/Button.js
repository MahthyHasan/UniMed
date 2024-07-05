import React from 'react';
import "../../../../Css/Patient/Button.css";

const Button = () => {
  return (
    <div className="container">
      <form className="form">
        <input
          required
          className="input"
          type="datetime-local"
          name="appointmentDateTime"
          id="appointmentDateTime"
        />
        <button className="form-button request-report" type="button">
          Request Medical Report
        </button>
        <button className="form-button general-checkup" type="button">
          General Checkup
        </button>
      </form>
    </div>
  );
};

export default Button;


