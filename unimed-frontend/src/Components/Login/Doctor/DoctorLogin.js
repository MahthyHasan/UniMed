import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import iconpath1 from '../../../assets/icons/user-icon.svg';
import iconpath2 from '../../../assets/icons/lock-icon.svg';
import logopath from '../../../assets/logo.png';
import backIcon from '../../../assets/icons2/back-buttons-multimedia-svgrepo-com.svg';
import tickIcon from '../../../assets/Login-icons/tick.svg';
import './doctorLogin.css';

function DoctorLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const initialFormData = {
    username: '',
    password: '',
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8088/api/v1/doctor/login',
        formData
      );
      const { token, user } = response.data;

      if (response.status === 200) {
        const doctor = response.data; 
        console.log('Logged in doctor:', doctor); 
        console.log('Doctor ID:', doctor._id);
        console.log('Doctor Email:', doctor.email);
        console.log('Doctor First Name:', doctor.first_name);

        localStorage.setItem('doctor_id', doctor._id);

      const doctorId = doctor._id;      
      await axios.post(`http://localhost:8088/api/v1/channelledLog/login/${doctorId}`);
      } else {
        console.error('Login failed:', response.data);        
      }

      // Store the token in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('username', formData.username);
      localStorage.setItem('user', JSON.stringify(user));
      
      

      // Make the second API call
      

      // Clear form fields
      setFormData(initialFormData);

      // Show success alert
      setAlertMessage('Successfully logged in to Unimed');
      setAlertVisible(true);

      // Automatically dismiss the alert after 3 seconds and navigate to home page
      setTimeout(() => {
        setAlertVisible(false);
        navigate('/doctorDashboard');
      }, 3000);
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({
        username: 'Invalid username or password',
        password: 'Invalid username or password',
      });
    }
  };

  return (
    <div className="sign-in-page-doctor">
      {alertVisible && (
        <div className="alert alert-success" role="alert">            
          <p className='alert-message'>{alertMessage}</p> 
          <img src={tickIcon} alt="User Icon" className="alert-icon" />
        </div>
      )}
      <a href="/logincat" className="back-button">
        <img src={backIcon} alt="Back" />
      </a>
      
      <div className="sign-in-form-doctor">
        <div className="row logo-div-doctor">
          <img src={logopath} className="logo-pmt-doctor" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="form-div-doctor">
          <div className="row mt-4">
            <label
              htmlFor="username"
              className="justify-content-center align-items-center sign-in-form-input-02-lable-doctor"
            >
              <img src={iconpath1} alt="User Icon" className="input-lable-icon-doctor" />
              <input
                id="username"
                className="sign-in-form-input-02-doctor"
                type="text"
                placeholder="USERNAME"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="row mt-2">
            <label htmlFor="password" className="sign-in-form-input-02-lable-doctor">
              <img src={iconpath2} alt="Password Icon" className="input-lable-icon-doctor" />
              <input
                id="password"
                className="sign-in-form-input-02-doctor"
                type="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="row mt-4 logo-div-doctor">
            <button className="signin-button-doctor" type="submit">
              Login
            </button>
          </div>
          <div className="row mt-1">
            <div className="col-6 d-flex justify-content-start"></div>
            <div className="col-6 d-flex justify-content-end">
              <p className="sign-in-small-text-doctor">Forgot password?</p>
            </div>
          </div>
        </form>
      </div>      
    </div>
  );
}

export default DoctorLogin;
