import React from 'react';
import "../../../../Css/Patient/Personal_Info.css";

const Details = () => {
  return (
    <div className="details-container">
      <div className="student-info">
        <div className="photo-placeholder">Photo</div>
        <div className="student-id">
          <p><b>Student ID:</b> UWU/CST/20/109</p>
          <p><b>Student Name:</b><br></br> M.J.M.M Hasan</p>
        </div>
      </div>
      <div className="additional-info">
        <div className="info-box">
          <p><b>Age</b></p>
          <p>25</p>
        </div>
        <div className="info-box">
          <p><b>Gender</b></p>
          <p>Male</p>
        </div>
        <div className="info-box">
          <p><b>Blood Group</b></p>
          <p>O+</p>
        </div>
        <div className="info-box">
          <p><b>Height</b></p>
          <p>160cm</p>
        </div>
        <div className="info-box">
          <p><b>Weight</b></p>
          <p>65Kg</p>
        </div>
        <div className="info-box">
          <p><b>BMI</b></p>
          <p>12</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
