import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../../Css/Patient/Personal_Info.css";
import ProfileIcon from "../../../../assets/icons/Vector.svg";

function Personal_Info({ username }) {
  const [userInfo, setUserInfo] = useState({
    id: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    bloodgrp: '',
    bmi: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user details based on the username
    axios.get(`http://localhost:8088/personaldetails/${username}`)
      .then(response => {
        const data = response.data;
        const bmi = calculateBMI(data.height, data.weight);
        setUserInfo({ ...data, bmi });
      })
      .catch(error => {
        console.error('There was an error fetching the user details!', error);
      });
  }, [username]);

  const calculateBMI = (height, weight) => {
    if (height && weight) {
      return (weight / ((height / 100) ** 2)).toFixed(2);
    }
    return '';
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setUserInfo({ ...userInfo, [field]: value, bmi: calculateBMI(userInfo.height, userInfo.weight) });
  };

  return (
    <div className="profileBioContainer">
      <div className="profileImageSection">
        <img
          src={ProfileIcon}
          className="profileImage"
          alt="profile"
        />
        <p className="userID">{userInfo.id}</p>
        <p className="userName">{username}</p>
      </div>
      <div className="bioDataSection">
        <div className="bioDataLine">
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Age</b></p>
            {isEditing ? (
              <input
                type="text"
                value={userInfo.age}
                onChange={(e) => handleInputChange(e, 'age')}
              />
            ) : (
              <div className="bioDataValue">{userInfo.age}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Height</b></p>
            {isEditing ? (
              <input
                type="text"
                value={userInfo.height}
                onChange={(e) => handleInputChange(e, 'height')}
              />
            ) : (
              <div className="bioDataValue">{userInfo.height}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Weight</b></p>
            {isEditing ? (
              <input
                type="text"
                value={userInfo.weight}
                onChange={(e) => handleInputChange(e, 'weight')}
              />
            ) : (
              <div className="bioDataValue">{userInfo.weight}</div>
            )}
          </div>
        </div>
        <div className="bioDataLine">
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Blood Group</b></p>
            <div className="bioDataValue">{userInfo.bloodgrp}</div>
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>BMI</b></p>
            {isEditing ? (
              <input
                type="text"
                value={userInfo.bmi}
                onChange={(e) => handleInputChange(e, 'bmi')}
              />
            ) : (
              <div className="bioDataValue">{userInfo.bmi}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Gender</b></p>
            <div className="bioDataValue">{userInfo.gender}</div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 0 100%', display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <div className="editButtonSection">
          <button onClick={handleEditClick}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal_Info;
