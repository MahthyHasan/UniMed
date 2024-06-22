import React, { useState } from 'react';
import "../../../../Css/Patient/Table.css";
import details from "../../../../assets/icons2/details.svg"; 
import Modal from './Modal';

const demoData = [
  {
    recordId: 'CST20109MD003',
    date: '04.02.2024',
    symptoms: ['Symptoms 01', 'Symptoms 02', 'Symptoms 03', 'Symptoms 04'],
    diagnoses: ['Diagnose 01', 'Diagnose 02', 'Diagnose 03', 'Diagnose 04'],
    medicines: ['Medicine 01', 'Medicine 02', 'Medicine 03', 'Medicine 04'],
  },
  { 
    recordId: 'CST20109MD004',
    date: '19.02.2024',
    symptoms: ['Symptoms 01', 'Symptoms 02', 'Symptoms 03', 'Symptoms 04'],
    diagnoses: ['Diagnose 01', 'Diagnose 02', 'Diagnose 03', 'Diagnose 04'],
    medicines: ['Medicine 01', 'Medicine 02', 'Medicine 03', 'Medicine 04'],
  },
  // ... other records
];

const Table = ({ data = demoData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleDetailsClick = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Record ID</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} >
              <td>{row.recordId}</td>
              <td>{row.date}</td>
              <td>
                <button className="details-btn" onClick={() => handleDetailsClick(row)}>
                  <img src={details} alt="details icon" className="details-icon" />
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onClose={() => setShowModal(false)} record={selectedRecord} />
    </>
  );
};

export default Table;
