import React from "react";
import "./profileBioTop.css";
import ProfileIcon from "../../../../assets/images/doctor.png";

function ProfileBioTop({name, id, age, gender, height, weight, bloodgrp}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="patientBioWithImage text-md-left">
            <div className="profileImageOnTop mx-auto mx-md-0">
              <img
                src={ProfileIcon}
                className="profileImageFile"
                alt="profileImage"
              />
            </div>
            <p className="userIDTextTag">DoctorID : {id}</p>
            <p className="userNameTextTag">Dr. Mrs. {name}</p>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="bioDataSingleDiv">
            <p className="bioDataTitleTag">Age</p>
            <input
              className="form-control inputTagForBioData"
              type="text"
              placeholder={age}
            />
          </div>
          <div className="bioDataSingleDiv">
            <p className="bioDataTitleTag">Gender</p>
            <input
              className="form-control inputTagForBioData"
              type="text"
              placeholder={gender}
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="bioDataSingleDiv">
            <p className="bioDataTitleTag">Height</p>
            <input
              className="form-control inputTagForBioData"
              type="text"
              placeholder={height}
            />
          </div>
          <div className="bioDataSingleDiv">
            <p className="bioDataTitleTag">Weight</p>
            <input
              className="form-control inputTagForBioData"
              type="text"
              placeholder={weight}
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="bioDataSingleDiv">
            <p className="bioDataTitleTag">BMI</p>
            <input
              className="form-control inputTagForBioData"
              type="text"
              placeholder="Normal"
            />
          </div>
          <div className="bioDataSingleDiv">
            <p className="bioDataTitleTag">Blood Group</p>
            <input
              className="form-control inputTagForBioData"
              type="text"
              placeholder={bloodgrp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBioTop;
