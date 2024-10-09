import React, { useState, useEffect } from 'react';
import "../../../../Css/Patient/MedicalReq.css";
import axios from "axios";

function MedicalReq() {
  const [userId, setUserId] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem("user_Id");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error("No userId found in localStorage.");
    }
  }, []);

  const handleClick = async () => {
    try {
      const requestData = {
        userId: userId, // Use the userId from localStorage
        requestType: "Medical Report Request" // Type of the request
      };

      const response = await axios.post("http://localhost:8088/submitMedicalRequest", requestData);

      if (response.status === 200) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
      }
    } catch (error) {
      console.error("Error submitting the request:", error);
    }
  };

  return (
    <div>
      <button className="medical-req-button" onClick={handleClick}>
        Medical Request
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>

      {showAlert && (
        <div className="alert alert-success" role="alert" style={{ backgroundColor: 'rgb(24, 205, 202)' }}>
          Medical Request submitted successfully!
        </div>
      )}
    </div>
  );
}

export default MedicalReq;
