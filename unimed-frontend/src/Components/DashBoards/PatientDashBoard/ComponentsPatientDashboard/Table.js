import React, { useState } from 'react';
import '../../../../Css/Patient/Table.css';
import Card from './RecordsCard';
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

const CardLayout = ({ data = demoData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleDetailsClick = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecord(null);
  };

  return (
    <>
      <div className="card-container">
        {data.map((record, index) => (
          <Card key={index} record={record} onDetailsClick={handleDetailsClick} />
        ))}
      </div>
      {showModal && (
        <Modal show={showModal} onClose={closeModal} record={selectedRecord} />
      )}
    </>
  );
};

export default CardLayout;
