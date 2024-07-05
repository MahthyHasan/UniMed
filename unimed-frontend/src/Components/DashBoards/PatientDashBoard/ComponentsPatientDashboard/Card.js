import React from "react";
import "../../../../Css/Patient/Card.css";

  

const Card = ({ type, date, time, isDoctorAvailable }) => {
  const cardStyle = {
    width: '280px',
    height: '150px',
    background: type === 'appointment' ? '#18cdca' : '#18cdca', // Use the same color for both cards
    borderRadius: '15px',
    boxShadow: '5px 10px 50px rgba(0, 0, 0, 0.7), -5px 0px 250px rgba(0, 0, 0, 0.7)',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
  };

  const availabilityText = isDoctorAvailable ? 'Doctor Available' : 'Doctor Unavailable';

  return (
    <div className="card" style={cardStyle}>
      {type === 'appointment' && (
        <React.Fragment>
          <p className="card-topic">Appointment Details:</p>
          <p className="card-text">Date: {date}</p>
          <p className="card-text">Time: {time}</p>
        </React.Fragment>
      )}
      {type === 'doctorAvailability' && (
        <p className="card-text">{availabilityText}</p>
      )}
    </div>
  );
};

export default Card;
