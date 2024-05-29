import React from "react";
import styled from "styled-components";

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
  }

  p {
    color: #000000;
    margin-bottom: 0;
  }
`;

export default function PreviousRecords({RecId,Date,Time,DaySinceLast}) {
  return (
    <PreviousRecordsContainer>
      <h4>Previous Record</h4>
      <div className="previous-record-box">
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
