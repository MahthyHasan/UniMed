import React from "react";
import { useNavigate } from "react-router-dom";

const NewRecordButton = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    navigate("/Prescription"); // Navigate to the /Prescription page
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#6BCB77",
        color: "#ffffff",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Add New Record
    </button>
  );
};

export default NewRecordButton;
