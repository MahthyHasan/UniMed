import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import "../../../../Css/Patient/MedicalReq.css";

function MedicalReq() {
  const [userId, setUserId] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

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
    // Fetch available dates
    try {
      const response = await axios.get(`http://localhost:8088/getMedicalDates/${userId}`);
      setAvailableDates(response.data);
      setShowModal(true); // Show the modal
    } catch (error) {
      console.error("Error fetching medical dates:", error);
    }
  };

  const handleSubmitRequest = async () => {
    try {
      const requestData = {
        userId: userId,
        requestType: "Medical Report Request",
        selectedDate: selectedDate // Include the selected date
      };

      const response = await axios.post("http://localhost:8088/submitMedicalRequest", requestData);

      if (response.status === 200) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
        setShowModal(false); // Close the modal
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

      {/* Modal for date selection */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black' }}>Select a Date for Medical Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {availableDates.map((date, index) => (
              <li key={index}>
                <button 
                  className="date-option" 
                  onClick={() => setSelectedDate(date)}
                  style={{ backgroundColor: selectedDate === date ? '#18cdca' : 'transparent' }}
                >
                  {date}
                </button>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitRequest} disabled={!selectedDate}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MedicalReq;
