import React, { useState } from 'react';
import "../../../../Css/Patient/Personal_Info.css";
import ProfileIcon from "../../../../assets/icons/Vector.svg";
function Personal_Info({ name, id, age, gender, height, weight, bloodgrp, bmi }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newAge, setNewAge] = useState(age);
  const [newHeight, setNewHeight] = useState(height);
  const [newWeight, setNewWeight] = useState(weight);
  const [newBmi, setNewBmi] = useState(bmi);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    if (field === 'age') setNewAge(value);
    if (field === 'height') setNewHeight(value);
    if (field === 'weight') setNewWeight(value);
    if (field === 'bmi') setNewBmi(value);
  };

  return (
    <div className="profileBioContainer">
      <div className="profileImageSection">
        <img
          src={ProfileIcon}
          className="profileImage"
          alt="profile"
        />
        <p className="userID">{id}</p>
        <p className="userName">{name}</p>
      </div>
      <div className="bioDataSection">
        <div className="bioDataLine">
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Age</b></p>
            {isEditing ? (
              <input
                type="text"
                value={newAge}
                onChange={(e) => handleInputChange(e, 'age')}
              />
            ) : (
              <div className="bioDataValue">{newAge}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Height</b></p>
            {isEditing ? (
              <input
                type="text"
                value={newHeight}
                onChange={(e) => handleInputChange(e, 'height')}
              />
            ) : (
              <div className="bioDataValue">{newHeight}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Weight</b></p>
            {isEditing ? (
              <input
                type="text"
                value={newWeight}
                onChange={(e) => handleInputChange(e, 'weight')}
              />
            ) : (
              <div className="bioDataValue">{newWeight}</div>
            )}
          </div>
        </div>
        <div className="bioDataLine">
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Blood Group</b></p>
            <div className="bioDataValue">{bloodgrp}</div>
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>BMI</b></p>
            {isEditing ? (
              <input
                type="text"
                value={newBmi}
                onChange={(e) => handleInputChange(e, 'bmi')}
              />
            ) : (
              <div className="bioDataValue">{newBmi}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Gender</b></p>
            <div className="bioDataValue">{gender}</div>
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
