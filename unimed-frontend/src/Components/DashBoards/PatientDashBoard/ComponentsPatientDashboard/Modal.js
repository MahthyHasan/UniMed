import React from 'react';
import styled from 'styled-components';
import LastDiagnosis from '../ComponentsPatientDashboard/LastDiagnosis';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
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
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
