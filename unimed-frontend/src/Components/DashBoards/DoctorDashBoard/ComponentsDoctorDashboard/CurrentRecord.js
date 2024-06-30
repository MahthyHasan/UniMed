import React from "react";
import styled from "styled-components";

const LastDiagnosisContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;

  h4 {
    font-weight: 550;
    margin-bottom: 1.5rem;
    color: #000; // Set the heading color to black
  }

  .last-diagnosis-box {
    flex: 1 1 30%;
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 1.5rem;
  }

  h5 {
    font-weight: 500;
    color: #333;
  }

  p {
    color: #000;
  }
`;

export default function CurrentRecord({
  symptoms,
  diagnoses,
  prescribedDrugs,
}) {
  return (
    <LastDiagnosisContainer>
      <h4>Record ID: UWUCST20109M004</h4>
      <div className="d-flex flex-wrap justify-content-between gap-3">
        <div className="last-diagnosis-box">
          <h5 className="mb-2">Symptoms</h5>
          <p className="text-start mb-0">
            {symptoms.map((symptom, index) => (
              <React.Fragment key={index}>
                - {symptom}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="last-diagnosis-box">
          <h5 className="mb-2">Diagnosis</h5>
          <p className="text-start mb-0">
            {diagnoses.map((diagnosis, index) => (
              <React.Fragment key={index}>
                - {diagnosis}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="last-diagnosis-box">
          <h5 className="mb-2">Prescribed Medicine</h5>
          <p className="text-start mb-0">
            {prescribedDrugs.map((drug, index) => (
              <React.Fragment key={index}>
                - {drug.drug}, {drug.dosage} times per day, {drug.days} days
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </LastDiagnosisContainer>
  );
}
