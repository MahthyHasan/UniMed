import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import pause from "../../../../assets/icons/pause.svg";
import logout from "../../../../assets/icons/logout.svg";
import continueicon from "../../../../assets/icons/continueicon.svg";

function Channellingactions() {
  const [doctorId, setDoctorId] = useState(localStorage.getItem('doctor_id'));
  const [status, setStatus] = useState('available');
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const handlePause = async () => {
    await axios.post(`http://localhost:8088/api/v1/channelledLog/pause/${doctorId}`);
    setStatus('paused');
    setIsPaused(true);
  };

  const handleContinue = async () => {
    await axios.post(`http://localhost:8088/api/v1/channelledLog/continue/${doctorId}`);
    setStatus('available');
    setIsPaused(false);
  };

  const handleLogout = async () => {
    await axios.post(`http://localhost:8088/api/v1/channelledLog/logout/${doctorId}`);
    navigate('/');
  };

  useEffect(() => {
    const doctorId = localStorage.getItem('doctor_id');
    setDoctorId(doctorId);
    setStatus('available');
  }, []);

  return (
    <div className="channelling-container">
      <div
        className={`channelling-card1 ${isPaused ? 'disabled' : ''}`}
        onClick={!isPaused ? handlePause : null}
      >
        <div className="channel-text">Pause Channelling</div>
        <div className="channel-container">
          <img src={pause} className="input-label-icon" />
        </div>
      </div>
      <div
        className={`channelling-card2 ${!isPaused ? 'disabled' : ''}`}
        onClick={isPaused ? handleContinue : null}
      >
        <div className="channel-text">Continue Channelling</div>
        <div className="channel-container">
          <img src={continueicon} className="input-label-icon" />
        </div>
      </div>
      <div className="channelling-card3" onClick={handleLogout}>
        <div className="channel-text">Log out</div>
        <div className="channel-container">
          <img src={logout} className="input-label-icon" />
        </div>
      </div>
    </div>
  );
}

export default Channellingactions;
