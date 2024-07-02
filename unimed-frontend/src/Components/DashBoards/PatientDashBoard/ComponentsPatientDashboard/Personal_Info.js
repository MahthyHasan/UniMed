import React, { useState, useEffect } from 'react';
import "../../../../Css/Patient/Personal_Info.css";
import ProfileIcon from "../../../../assets/icons/Vector.svg";
import axios from 'axios';

function Personal_Info({ id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8080/personaldetails/${id}`)
      .then(response => {
        setPersonalInfo(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the personal details!', error);
        setLoading(false);
      });
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      [field]: value
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!personalInfo) {
    return <div>No personal information found.</div>;
  }

  const { name, age, gender, height, weight, bloodGroup, bmi } = personalInfo;

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
                value={age}
                onChange={(e) => handleInputChange(e, 'age')}
              />
            ) : (
              <div className="bioDataValue">{age}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Height</b></p>
            {isEditing ? (
              <input
                type="text"
                value={height}
                onChange={(e) => handleInputChange(e, 'height')}
              />
            ) : (
              <div className="bioDataValue">{height}</div>
            )}
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Weight</b></p>
            {isEditing ? (
              <input
                type="text"
                value={weight}
                onChange={(e) => handleInputChange(e, 'weight')}
              />
            ) : (
              <div className="bioDataValue">{weight}</div>
            )}
          </div>
        </div>
        <div className="bioDataLine">
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>Blood Group</b></p>
            <div className="bioDataValue">{bloodGroup}</div>
          </div>
          <div className="bioDataItem">
            <p className="bioDataTitle"><b>BMI</b></p>
            {isEditing ? (
              <input
                type="text"
                value={bmi}
                onChange={(e) => handleInputChange(e, 'bmi')}
              />
            ) : (
              <div className="bioDataValue">{bmi}</div>
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
