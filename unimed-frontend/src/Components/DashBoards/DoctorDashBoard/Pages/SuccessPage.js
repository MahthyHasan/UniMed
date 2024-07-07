import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";

function SuccessPage() {
  const { recordId } = useParams();
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    backgroundColor: "#F0F0F0",
    paddingTop: "50px",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const recordIdStyle = {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#333",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "10px",
    flex: "1",
  };

  const consultButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#bbf7f6",
    color: "#333",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#FF6961",
    ccolor: "#333",
    marginLeft: "10px",
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h1 style={headingStyle}>Successfully Added New Record!</h1>
          <p style={recordIdStyle}>Record ID: {recordId}</p>
          <div style={buttonContainerStyle}>
            <button
              style={consultButtonStyle}
              onClick={() => navigate("/doctorDashboard")}
            >
              Consult for a new patient
            </button>
            <button style={cancelButtonStyle} onClick={() => navigate("/")}>
              Cancel and return to the main page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SuccessPage;
