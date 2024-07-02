import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LastDiagnosisContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;

  h4 {
    font-weight: 550;
    margin-bottom: 1.5rem;
    color: #000;
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

export default function LastDiagnosis({ patientId }) {
  const [latestRecord, setLatestRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8088/api/v1/medicalRecords/latest/${patientId}`)
      .then(response => {
        setLatestRecord(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the latest medical record!", error);
        setError(error);
        setLoading(false);
      });
  }, [patientId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <LastDiagnosisContainer>
      <h4>Last Diagnosis</h4>
      <div className="d-flex flex-wrap justify-content-between gap-3">
        <div className="last-diagnosis-box">
          <h5 className="mb-2">Symptoms</h5>
          <p className="text-start mb-0">
            {latestRecord.symptoms.map((symptom, index) => (
              <span key={index}>- {symptom}<br /></span>
            ))}
          </p>
        </div>
        <div className="last-diagnosis-box">
          <h5 className="mb-2">Diagnosis</h5>
          <p className="text-start mb-0">
            {latestRecord.diaognises.map((diagnosis, index) => (
              <span key={index}>- {diagnosis}<br /></span>
            ))}
          </p>
        </div>
        <div className="last-diagnosis-box">
          <h5 className="mb-2">Prescribed Medicine</h5>
          <p className="text-start mb-0">
            {latestRecord.priscripedMedicines.map((medicine, index) => (
              <span key={index}>- {medicine}<br /></span>
            ))}
          </p>
        </div>
      </div>
    </LastDiagnosisContainer>
  );
}
