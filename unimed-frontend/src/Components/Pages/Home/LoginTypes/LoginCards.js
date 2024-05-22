import React from "react";
import Card from "./Card";
import "./loginCards.css";

function LoginCards() {
  const handleLoginClick = (userType) => {
    console.log(`${userType} login clicked`);
    // Add your login logic here
  };

  return (
    <div className="login-cards">
      <Card
        title="Doctor"
        description="Login as Doctor"
        onClick={() => handleLoginClick("Doctor")}
      />
      <Card
        title="Patient"
        description="Login as Patient"
        onClick={() => handleLoginClick("Patient")}
      />
      <Card
        title="Pharmacist"
        description="Login as Pharmacist"
        onClick={() => handleLoginClick("Pharmacist")}
      />
      <Card
        title="Admin"
        description="Login as Admin"
        onClick={() => handleLoginClick("Admin")}
      />
    </div>
  );
}

export default LoginCards;
