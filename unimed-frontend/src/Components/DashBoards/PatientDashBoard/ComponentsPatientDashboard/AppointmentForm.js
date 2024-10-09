import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faExclamationCircle, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import "../../../../Css/Patient/AppointmentForm.css";

const AppointmentForm = ({ onCancel, userId }) => {
  const [appointmentData, setAppointmentData] = useState({
    patient: userId,
    appointmentDate: "",
    startTime: "",
    status: "scheduled",
    disease: ""
  });

  const [availableDates, setAvailableDates] = useState([]); // State to hold available dates
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]); // State to hold available time slots

  // Fetch available time slots
  useEffect(() => {
    const fetchAvailableTimeSlots = async () => {
      try {
        const response = await axios.get("http://localhost:8088/availableTimeSlots");
        console.log("Available time slots fetched:", response.data); // Debugging log
        setAvailableTimeSlots(response.data);

        // Extract unique dates from time slots
        const dates = [...new Set(response.data.map(slot => slot.date))];
        setAvailableDates(dates); // Set available dates
      } catch (error) {
        console.error("Error fetching available time slots:", error);
        toast.error("Error fetching available time slots. Please try again.", {
          position: "top-right",
          autoClose: 3001
        });
      }
    };
    
    fetchAvailableTimeSlots();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });

    // Reset the startTime when changing the date
    if (name === 'appointmentDate') {
      setAppointmentData({ ...appointmentData, startTime: '' }); // Reset start time
    }
  };

  // Filter available time slots based on selected date
  const filteredTimeSlots = availableTimeSlots.filter(slot => slot.date === appointmentData.appointmentDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8088/addAppointment", appointmentData);
      if (response.status === 200) {
        toast.success("Appointment created successfully!", {
          position: "top-right",
          autoClose: 3001
        });
        onCancel(); // Close the form on success
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
      toast.error("Error creating appointment. Please try again.", {
        position: "top-right",
      autoClose: 3001
      });
    }
  };

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
              <FontAwesomeIcon icon={faClock} className="form-icon" />
              Appointment Date
            </label>
            <select
              name="appointmentDate"
              value={appointmentData.appointmentDate}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select Date</option>
              {availableDates.length > 0 ? (
                availableDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))
              ) : (
                <option value="">No available dates</option>
              )}
            </select>
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
              disabled={!appointmentData.appointmentDate} // Disable if no date is selected
            >
              <option value="">Select Time</option>
              {filteredTimeSlots.length > 0 ? (
                filteredTimeSlots.map((slot) => (
                  slot.isAvailable && (
                    <option key={slot._id} value={slot.start_time}>
                      {slot.start_time} - {slot.end_time}
                    </option>
                  )
                ))
              ) : (
                <option value="">No available time slots</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              <FontAwesomeIcon icon={faExclamationCircle} className="form-icon" />
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
              <FontAwesomeIcon icon={faSave} className="px-2" />
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
