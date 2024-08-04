import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faExclamationCircle,
  faSave,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AppointmentForm.css'; // Import the CSS file

const AppointmentForm = ({ doctor, onSubmit, onCancel }) => {
  const [appointmentData, setAppointmentData] = useState({
    patient: "",
    appointmentDate: "",
    startTime: "",
    endTime: "",
    status: "scheduled",
    disease: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "appointmentDate" ||
      name === "startTime" ||
      name === "endTime"
    ) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(appointmentData);
  };

  return (
    <div className="appoinment">
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
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={appointmentData.startTime}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              <FontAwesomeIcon icon={faClock} className="form-icon" />
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              value={appointmentData.endTime}
              onChange={handleInputChange}
              className="form-input"
              required
            />
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
