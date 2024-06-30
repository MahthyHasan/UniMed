import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const AddSymptomModal = ({ show, handleClose, handleSave }) => {
  const [newSymptom, setNewSymptom] = useState("");

  const handleInputChange = (e) => {
    setNewSymptom(e.target.value);
  };

  const handleSubmit = () => {
    handleSave(newSymptom);
    setNewSymptom("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <ModalTitle>Add Symptom</ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formSymptom" className="mb-4">
            <Form.Label>Symptom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter symptom"
              value={newSymptom}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <CloseButton onClick={handleClose}>Cancel</CloseButton>
        <Spacer />
        <SaveButton onClick={handleSubmit}>Add</SaveButton>
      </Modal.Footer>
    </Modal>
  );
};

const ModalTitle = styled.h5`
  color: #333;
  font-size: 18px;
  font-weight: 500;
`;

const buttonWidth = "100px";

const SaveButton = styled.button`
  background-color: #6bcb77;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: ${buttonWidth};

  &:hover {
    background-color: #5ab665;
  }

  &:focus {
    background-color: #5ab665;
    box-shadow: none;
  }
`;

const CloseButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  padding: 10px 20px;
  color: #333;
  cursor: pointer;
  border-radius: 4px;
  width: ${buttonWidth};

  &:hover {
    background-color: #c4c4c4;
  }

  &:focus {
    background-color: #c4c4c4;
    box-shadow: none;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

export default AddSymptomModal;
