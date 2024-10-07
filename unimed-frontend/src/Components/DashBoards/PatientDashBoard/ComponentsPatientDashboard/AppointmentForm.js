import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faExclamationCircle, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';  // Import axios
import "../../../../Css/Patient/AppointmentForm.css";

const AppointmentForm = ({ doctor, onCancel }) => {
  const [appointmentData, setAppointmentData] = useState({
    patient: "",
    appointmentDate: "",
    startTime: "",
    status: "scheduled",
    disease: ""
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8088/addAppointment", appointmentData);
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

  // Time options for appointment time dropdown
  const timeOptions = [];
  for (let i = 8; i <= 16; i++) {
    if (i < 16) {
      timeOptions.push(`${String(i).padStart(2, "0")}:00`, `${String(i).padStart(2, "0")}:30`);
    } else {
      timeOptions.push(`${String(i).padStart(2, "0")}:00`);
    }
  }

  // Get tomorrow's date in YYYY-MM-DD format for the min attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment date by 1
  const minDate = tomorrow.toISOString().split("T")[0]; // Format the date

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
              min={minDate} // Set the minimum date to tomorrow
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
