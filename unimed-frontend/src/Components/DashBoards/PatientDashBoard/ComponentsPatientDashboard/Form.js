import React from "react";
import "../../../../Css/Patient/Form.css";


function Form() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="enrollmentNumber">Enrollment Number</label>
          <input type="text" className="form-control" id="enrollmentNumber" placeholder="Enter Enrollment Number" />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" />
        </div>
        <div className="form-group row">
          <label>Gender:</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
            <label className="form-check-label" htmlFor="male">Male</label>
            <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group row">
          <label>Appointment Type:</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="appointmentType" id="generalCheckup" value="generalCheckup" />
            <label className="form-check-label" htmlFor="generalCheckup">General Checkup</label>
            <input className="form-check-input" type="radio" name="appointmentType" id="requestMedicalReport" value="requestMedicalReport" />
            <label className="form-check-label" htmlFor="requestMedicalReport">Request Medical Report</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="appointmentTime">Pick Your Appointment Time</label>
          <input type="datetime-local" className="form-control" id="appointmentTime" />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn">Confirm Appointment</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
