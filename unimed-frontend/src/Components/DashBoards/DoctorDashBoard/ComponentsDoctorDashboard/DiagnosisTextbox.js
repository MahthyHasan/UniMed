import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #6bcb77;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
  margin-top: 42px;
  display: block;
  margin-left: auto;

  &:hover {
    background-color: #5ab665;
  }

  &:focus {
    background-color: #5ab665;
    box-shadow: none;
  }
`;

const StyledH5 = styled.h5`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;
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

const DiagnosisTextbox = ({
  diagnoses,
  setDiagnoses,
  currentDiagnosis,
  setCurrentDiagnosis,
}) => {
  const handleAddDiagnosis = () => {
    if (currentDiagnosis.trim() !== "") {
      setDiagnoses([...diagnoses, currentDiagnosis]);
      setCurrentDiagnosis(""); // Clear current diagnosis text box
    }
  };

  return (
    <div>
      <StyledH5>Diagnosis</StyledH5>
      <StyledTextarea
        className="form-control"
        rows="3"
        value={currentDiagnosis}
        onChange={(e) => setCurrentDiagnosis(e.target.value)}
        placeholder="Enter diagnosis..."
      ></StyledTextarea>
      <StyledButton onClick={handleAddDiagnosis}>Add diagnosis</StyledButton>
    </div>
  );
};

export default DiagnosisTextbox;
