import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #f0f8ff; /* AliceBlue background */
  padding: 3rem;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid #4682b4; /* SteelBlue border */
`;

const CloseButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500; /* OrangeRed background */
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6347; /* Tomato background on hover */
  }
`;

// New styled components for text colors
const Heading = styled.h3`
  color: #4682b4; /* SteelBlue */
`;

const SubHeading = styled.h4`
  color: #ff4500; /* OrangeRed */
`;

const ListItem = styled.li`
  color: #000; /* Black for list items */
`;

// Helper function to format arrays or strings
const formatArrayOrString = (data, separator = ', ') => {
  if (data && (Array.isArray(data) || typeof data === 'string')) {
    if (Array.isArray(data)) {
      return data.join(separator);
    } else {
      return data.split(/(?=[A-Z])/).join(separator);
    }
  }
  return 'No data available';
};
const Modal = ({ show, onClose, record }) => {
  if (!show || !record) return null; // Ensure record is available

  console.log("Record in Modal: ", record);
  console.log("Diagnoses: ", record.diagnoses);
  console.log("Medicines: ", record.medicines);

  return (
    <ModalBackdrop>
      <ModalContent>
        <Heading>Record Details</Heading>

        <SubHeading>Symptoms:</SubHeading>
        <ul>
          {record.symptoms && record.symptoms.length > 0 ? (
            record.symptoms.map((symptom, index) => (
              <ListItem key={index}>{symptom}</ListItem>
            ))
          ) : (
            <ListItem>No symptoms available</ListItem>
          )}
        </ul>

        <SubHeading>Diagnosis:</SubHeading>
        <ul>
          {record.diagnoses && record.diagnoses.length > 0 ? (
            record.diagnoses.map((diagnosis, index) => (
              <ListItem key={index}>{diagnosis}</ListItem>
            ))
          ) : (
            <ListItem>No diagnoses available</ListItem>
          )}
        </ul>

        <SubHeading>Prescribed Medicine:</SubHeading>
        <ul>
          {record.medicines && record.medicines.length > 0 ? (
            record.medicines.map((medicine, index) => (
              <ListItem key={index}>{medicine}</ListItem>
            ))
          ) : (
            <ListItem>No prescribed medicines available</ListItem>
          )}
        </ul>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
};


export default Modal;
