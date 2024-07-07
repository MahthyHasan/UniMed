import React from "react";
import "./verify.css";
import tickIcon from "../../assets/Login-icons/tick.svg"; // Add your tick icon file here

function VerifyEmail() {
  return (
    <div className="container centered-badge">
      <div className="verify-box">
        <div className="verify-box-top">
          <img src={tickIcon} alt="Verified" className="tick-icon" />
        </div>
        <div className="verify-box-bottom">
          <p>Check your Email to verify your account.</p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
