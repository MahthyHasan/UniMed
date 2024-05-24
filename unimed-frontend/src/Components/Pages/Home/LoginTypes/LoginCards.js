import React from "react";
import Card from "./Card";
import "./loginCards.css";
import { Link } from "react-router-dom";
import doctorIcon from "../../../../assets/icons2/doctor-f-svgrepo-com.svg";
import patientIcon from "../../../../assets/icons2/patient-with-injured-bandaged-head-standing-with-saline-via-intravenous-line-svgrepo-com.svg";
import pharmesistIcon from "../../../../assets/icons2/pharmacist-pharmacy-counter-drug-store-svgrepo-com.svg";
import adminIcon from "../../../../assets/icons2/edit-3-svgrepo-com.svg";

function LoginCards() {
  const handleLoginClick = (userType) => {
    console.log(`${userType} login clicked`);
    // Add your login logic here
  };

  return (
    <div className="login-cards">
      <Link to="/doctor/login" className="card-link">
        <Card
          title="Doctor"
          description="Login as Doctor"
          icon={doctorIcon}
          onClick={() => handleLoginClick("Doctor")}
        />
      </Link>

      <Link to="/login" className="card-link">
        <Card
          title="Patient"
          description="Login as Patient"
          icon={patientIcon} // Add appropriate icon path
          onClick={() => handleLoginClick("Patient")}
        />
      </Link>

      <Link to="/doctor/login" className="card-link">
        <Card
          title="Pharmacist"
          description="Login as Pharmacist"
          icon={pharmesistIcon} // Add appropriate icon path
          onClick={() => handleLoginClick("Pharmacist")}
        />
      </Link>

      <Link to="/doctor/login" className="card-link">
        <Card
          title="Admin"
          description="Login as Admin"
          icon={adminIcon} // Add appropriate icon path
          onClick={() => handleLoginClick("Admin")}
        />
      </Link>
    </div>
  );
}

export default LoginCards;
