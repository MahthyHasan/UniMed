import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PreviousRecordsContainer = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-weight: 550;
    margin-bottom: 1.5rem;
    color: #000;
  }

  .previous-record-box {
    background-color: #d9d9d9;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  p {
    color: #000000;
    margin-bottom: 0;
  }
`;

export default function PreviousRecords({ RecId, Date, Time, DaySinceLast }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("RecordId", RecId);
    navigate(`/record/${RecId}`);
  };

  return (
    <PreviousRecordsContainer>
      <div className="previous-record-box" onClick={handleClick}>
        <p>{RecId}</p>
        <p>
          {Date}
          {Time}
        </p>
        <p>{DaySinceLast}</p>
      </div>
    </PreviousRecordsContainer>
  );
}
