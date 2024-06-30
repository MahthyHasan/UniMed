import React from 'react';
import styled from 'styled-components';
import LastDiagnosis from '../ComponentsPatientDashboard/LastDiagnosis';

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

const Modal = ({ show, onClose, record }) => {
  if (!show) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <LastDiagnosis
          symptom1={record.symptoms[0]}
          symptom2={record.symptoms[1]}
          symptom3={record.symptoms[2]}
          diagnosis1={record.diagnoses[0]}
          presmed1={record.medicines[0]}
          presmed2={record.medicines[1]}
        />
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
