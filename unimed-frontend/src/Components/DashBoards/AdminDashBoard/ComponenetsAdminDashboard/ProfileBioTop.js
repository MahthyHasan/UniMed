import React from "react";
import "./profileBioTop.css";
import ProfileIcon from "../../../../assets/images/doctor.png";

function ProfileBioTop() { // Destructure the props object
  return (
    <div className="row">
      <div className="col-3">
        <div className="row">
          <img src={ProfileIcon} className="profileImageOnTop" alt="profileImage" />
        </div>
        <div className="row">
            <p className="userIDTextTag">DoctorID : Reg 991092811</p>
        </div>
        <div className="row"></div>
      </div>
      <div className="col-3">
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <div className="col-3">
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <div className="col-3">
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default ProfileBioTop;
