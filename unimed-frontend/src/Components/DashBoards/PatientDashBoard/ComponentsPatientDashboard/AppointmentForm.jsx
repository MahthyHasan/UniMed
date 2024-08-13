import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faExclamationCircle, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';  // Import axios
import './AppointmentForm.css'; // Import the CSS file

const AppointmentForm = ({ doctor, onCancel }) => {
  const [appointmentData, setAppointmentData] = useState({
    patient: "",
    appointmentDate: "",
    startTime: "",
    status: "scheduled",
    disease: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "appointmentDate") {
      const selectedDate = new Date(value);
      if (selectedDate < new Date()) {
        toast.error(`${name} cannot be set to a past date or time.`, {
          position: "top-right",
          autoClose: 3000
        });
        setAppointmentData({
          ...appointmentData,
          [name]: appointmentData[name]
        });
        return;
      }
    }
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8088/appointments', appointmentData);
      if (response.status === 200) {
        toast.success("Appointment created successfully!", {
          position: "top-right",
          autoClose: 3001
        });
      }
    } catch (error) {
      toast.error("Error creating appointment.", {
        position: "top-right",
        autoClose: 3001
      });
    }
  };

  const timeOptions = [];
  for (let i = 8; i <= 16; i++) {
    if (i < 16) {
      timeOptions.push(`${String(i).padStart(2, "0")}:00`, `${String(i).padStart(2, "0")}:30`);
    } else {
      timeOptions.push(`${String(i).padStart(2, "0")}:00`);
    }
  }

  return (
    <div className="appoinment">
      <ToastContainer />
      <div className="appoinment-content">
        <div className="appoinment-header">
          <h2 className="appoinment-title">Book Appointment</h2>
          <button
            type="button"
            onClick={onCancel}
            className="appoinment-close-button"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              <FontAwesomeIcon icon={faCalendarAlt} className="form-icon" />
              Appointment Date
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={appointmentData.appointmentDate}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              <FontAwesomeIcon icon={faClock} className="form-icon" />
              Appointment Time
            </label>
            <select
              name="startTime"
              value={appointmentData.startTime}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select Time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="form-icon"
              />
              Disease
            </label>
            <input
              type="text"
              name="disease"
              value={appointmentData.disease}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="submit-button">
              <FontAwesomeIcon icon={faSave} className="px-2"/>
               Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
