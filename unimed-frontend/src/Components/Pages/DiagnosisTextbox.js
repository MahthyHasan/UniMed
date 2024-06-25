import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #6bcb77;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
  margin-top: 16px;
  display: block;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    margin: 16px auto 0;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const StyledH5 = styled.h5`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const DiagnosisTextbox = ({ diagnosis, setDiagnosis }) => {
  const handleDiagnosisChange = (e) => {
    setDiagnosis(e.target.value);
  };

  const handleAddDiagnosis = () => {
    console.log("Diagnosis:", diagnosis);
  };

  return (
    <div>
      <StyledH5>Diagnosis</StyledH5>
      <StyledTextarea
        className="form-control"
        rows="3"
        value={diagnosis}
        onChange={handleDiagnosisChange}
        placeholder="Enter diagnosis..."
      ></StyledTextarea>
      <StyledButton onClick={handleAddDiagnosis}>Add diagnosis</StyledButton>
    </div>
  );
};

export default DiagnosisTextbox;
