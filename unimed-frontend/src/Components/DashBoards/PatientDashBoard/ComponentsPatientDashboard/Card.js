import React, { useState, useEffect } from "react";
import patientIcon from "../../../../assets/icons/patient.svg";
import "../../../../Css/Patient/Card.css";
import axios from 'axios';

const Card = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:8088/appointments/${userId}`);
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [userId]);

  return (
    <div className="card--container">
      {/* Appointment Details Card */}
      <div className="availability-card">
        <div className="availability-header">
          Upcoming Appointments
        </div>
        <div className="availability-body">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment._id} className="appointment-detail">
                <p><strong>Date:</strong> {appointment.appointmentDate}</p>
                <p><strong>Time:</strong> {appointment.startTime}</p>
              </div>
            ))
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
