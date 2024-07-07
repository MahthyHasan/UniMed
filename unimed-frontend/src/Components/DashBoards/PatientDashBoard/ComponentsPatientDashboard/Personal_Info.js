import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../Css/Patient/Personal_Info.css";
import ProfileIcon from "../../../../assets/icons/Vector.svg";

function Personal_Info({ username }) {
  const [userInfo, setUserInfo] = useState({
    id: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodgrp: "",
    bmi: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8088/api/v1/userbio/username/${username}`)
      .then((response) => {
        const data = response.data;
        const bmi = calculateBMI(data.height, data.weight);
        setUserInfo({ ...data, bmi });
      })
      .catch((error) => {
        console.error("There was an error fetching the user details!", error);
      });
  }, [username]);

  const calculateBMI = (height, weight) => {
    if (height && weight) {
      return (weight / (height / 100) ** 2).toFixed(2);
    }
    return "";
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setUserInfo({
      ...userInfo,
      [field]: value,
      bmi: calculateBMI(userInfo.height, userInfo.weight),
    });
  };

  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="headerSection">
          <h2
            className="cardTitle"
            style={{
              color: "#18cdca",
              fontFamily: "Arial, sans-serif",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            Personal Information
          </h2>
        </div>
        <div className="profileImageSection">
          <img src={ProfileIcon} className="profileImage" alt="profile" />
          <p className="userID">{userInfo.id}</p>
          <p className="userName">{username}</p>
        </div>
        <div className="bioDataSection">
          <div className="bioDataColumn">
            <div className="bioDataItem">
              <p className="bioDataTitle">
                <b>Age</b>
              </p>
              {isEditing ? (
                <input
                  type="text"
                  value={userInfo.age}
                  onChange={(e) => handleInputChange(e, "age")}
                />
              ) : (
                <div className="bioDataValue">{userInfo.age}</div>
              )}
            </div>
            <div className="bioDataItem">
              <p className="bioDataTitle">
                <b>Height</b>
              </p>
              {isEditing ? (
                <input
                  type="text"
                  value={userInfo.height}
                  onChange={(e) => handleInputChange(e, "height")}
                />
              ) : (
                <div className="bioDataValue">{userInfo.height}</div>
              )}
            </div>
            <div className="bioDataItem">
              <p className="bioDataTitle">
                <b>Weight</b>
              </p>
              {isEditing ? (
                <input
                  type="text"
                  value={userInfo.weight}
                  onChange={(e) => handleInputChange(e, "weight")}
                />
              ) : (
                <div className="bioDataValue">{userInfo.weight}</div>
              )}
            </div>
          </div>
          <div className="bioDataColumn">
            <div className="bioDataItem">
              <p className="bioDataTitle">
                <b>Blood Group</b>
              </p>
              <div className="bioDataValue">{userInfo.bloodGroup}</div>
            </div>
            <div className="bioDataItem">
              <p className="bioDataTitle">
                <b>BMI</b>
              </p>
              {isEditing ? (
                <input
                  type="text"
                  value={userInfo.bmi}
                  onChange={(e) => handleInputChange(e, "bmi")}
                />
              ) : (
                <div className="bioDataValue">{userInfo.bmi}</div>
              )}
            </div>
            <div className="bioDataItem">
              <p className="bioDataTitle">
                <b>Gender</b>
              </p>
              <div className="bioDataValue">{userInfo.gender}</div>
            </div>
          </div>
        </div>
        <div className="editButtonSection">
          <button
            onClick={handleEditClick}
            style={{
              backgroundColor: isEditing ? "#18cdca" : "#18cdca", // Green for Save, Blue for Edit
              color: "#fff",
              width: "150px",
              height: "50px",
              padding: "15px 30px",
              fontSize: "18px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal_Info;
