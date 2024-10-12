import React, { useState, useEffect } from 'react';
import "../../../../Css/Patient/MedicalReq.css";
import axios from "axios";

function MedicalReq() {
  const [userId, setUserId] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [dates, setDates] = useState([]); // Store dates from the medical records
  const [selectedDate, setSelectedDate] = useState(""); // Store the selected date

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_Id");
    if (storedUserId) {
      setUserId(storedUserId);
      // Temporarily hardcode dates for testing
      const testDates = [
        { date: "2024-07-13" },
        { date: "2024-08-13" },
        { date: "2024-07-31" }
      ];
      setDates(testDates);

      // Uncomment below if you want to test fetching real data from API again
      // fetchMedicalDates(storedUserId); 
    } else {
      console.error("No userId found in localStorage.");
    }
  }, []);

  const fetchMedicalDates = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8088/getMedicalDates/${userId}`);
      if (response.status === 200) {
        setDates(response.data);
        console.log("Fetched Dates: ", response.data); // Log fetched dates
      }
    } catch (error) {
      console.error("Error fetching medical dates:", error);
    }
  };

  const handleClick = async () => {
    console.log("Selected Date: ", selectedDate); // Log the selected date
    try {
      const requestData = {
        userId: userId,
        requestType: "Medical Report Request",
        selectedDate: selectedDate // Only send the selected date
      };

      const response = await axios.post("http://localhost:8088/submitMedicalRequest", requestData);
      if (response.status === 200) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting the request:", error);
    }
  };

  return (
    <div>
      <div>
        <h3>Select a Date for Medical Report:</h3>
        <select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
          <option value="">Select a date</option>
          {dates.map((date, index) => (
            <option key={index} value={date.date}>
              {date.date}
            </option>
          ))}
        </select>
      </div>
      <button className="medical-req-button" onClick={handleClick}>
        Submit Request
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
