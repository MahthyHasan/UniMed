import React, { useState } from 'react';
import "../../../../Css/Patient/Personal_Info.css";

const Details = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [details, setDetails] = useState({
    studentID: 'UWU/CST/20/109',
    studentName: 'M.J.M.M Hasan',
    age: 25,
    gender: 'Male',
    bloodGroup: 'O+',
    height: '160cm',
    weight: '65Kg',
    bmi: 12
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e, field) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  return (
    <div className="details-container">
      <div className="left-section">
        <div className="student-info">
          <div className="photo-placeholder">Photo</div>
          <div className="student-id">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={details.studentID}
                  onChange={(e) => handleChange(e, 'studentID')}
                />
                <input
                  type="text"
                  value={details.studentName}
                  onChange={(e) => handleChange(e, 'studentName')}
                />
              </>
            ) : (
              <>
                <p><b>Student ID:</b> {details.studentID}</p>
                <p><b>Student Name:</b><br /> {details.studentName}</p>
              </>
            )}
          </div>
        </div>
        <div className="edit-button-container">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
      <div className="additional-info">
        {['age', 'gender', 'bloodGroup', 'height', 'weight', 'bmi'].map((field) => (
          <div className="info-box" key={field}>
            <p><b>{field.charAt(0).toUpperCase() + field.slice(1)}</b></p>
            {isEditing ? (
              <input
                type="text"
                value={details[field]}
                onChange={(e) => handleChange(e, field)}
              />
            ) : (
              <p>{details[field]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
