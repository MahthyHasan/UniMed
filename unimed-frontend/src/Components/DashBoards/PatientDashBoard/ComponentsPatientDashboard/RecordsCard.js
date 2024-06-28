import React from 'react';
import '../../../../Css/Patient/Table.css';

const Card = ({ record, onDetailsClick }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{record.recordId}</h2>
        <p>{record.date}</p>
      </div>
      <div className="card-footer">
        <button className="details-btn" onClick={() => onDetailsClick(record)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
