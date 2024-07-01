import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #6bcb77;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background-color: #5ab665;
  }

  &:focus {
    background-color: #5ab665;
    box-shadow: none;
  }
`;

const AddDiagnosisModal = ({ show, handleClose, handleSave }) => {
  const [newDiagnosis, setNewDiagnosis] = useState("");

  const handleInputChange = (e) => {
    setNewDiagnosis(e.target.value);
  };

  const handleSubmit = () => {
    handleSave(newDiagnosis);
    setNewDiagnosis("");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Diagnosis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDiagnosis" className="mb-4">
            <Form.Label>Diagnosis</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter diagnosis"
              value={newDiagnosis}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <StyledButton onClick={handleClose}>Cancel</StyledButton>
        <StyledButton onClick={handleSubmit}>Add</StyledButton>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDiagnosisModal;
