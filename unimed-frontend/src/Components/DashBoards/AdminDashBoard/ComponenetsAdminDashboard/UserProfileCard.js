import React from "react";
import profileImage from "../../../../assets/images/doctor.png";
import "./userProfileCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserProfileCard({ name, userId, onViewProfile, profileLink }) {
  const buttonStyle = {
    backgroundColor: "#18cdca",
    color: "#fff",
    border: "none",
    borderRadius: "0.375rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    fontWeight: 500,
  };

  const hoverStyle = {
    backgroundColor: "#18cdca",
    transform: "scale(1.05)",
  };
  return (
    <div className="userProfileCards">
      <div className="row">
        <div className="col-4">
          <img src={profileImage} alt={name} className="userProfileImage" />
        </div>
        <div className="col-8">
          <div className="row">
            <p className="userName">{name}</p>
          </div>
          <div className="row">
            <p className="userId">{userId}</p>
          </div>
          <div className="row mt-4">
            <Link to={profileLink}>
              <Button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style = { ...buttonStyle, ...hoverStyle })
                }
                onMouseOut={(e) => (e.currentTarget.style = buttonStyle)}
              >
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
