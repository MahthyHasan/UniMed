import React from 'react';
import "../../../../Css/Patient/Modal.css";

const Modal = ({ show, onClose, record }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Last Diagnose</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          <div className="modal-section">
            <h3>Symptoms</h3>
            <ul>
              {record.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
          <div className="modal-section">
            <h3>Diagnose</h3>
            <ul>
              {record.diagnoses.map((diagnose, index) => (
                <li key={index}>{diagnose}</li>
              ))}
            </ul>
          </div>
          <div className="modal-section">
            <h3>Prescribed Medicine</h3>
            <ul>
              {record.medicines.map((medicine, index) => (
                <li key={index}>{medicine}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
