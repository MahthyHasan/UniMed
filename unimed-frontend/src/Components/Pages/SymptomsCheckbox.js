import React, { useState } from "react";
import styled from "styled-components";
import AddSymptomModal from "./AddSymptomModal";

const SymptomsCheckbox = ({ symptoms, setSymptoms }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSymptomChange = (symptom, isChecked) => {
    if (isChecked) {
      setSymptoms([...symptoms, symptom]);
    } else {
      setSymptoms(symptoms.filter((item) => item !== symptom));
    }
  };

  const handleAddSymptom = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveSymptom = (newSymptom) => {
    if (newSymptom) {
      setSymptoms([...symptoms, newSymptom]);
    }
    handleCloseModal();
  };

  return (
    <Container>
      <Title>Symptoms</Title>
      <Row>
        <Col>
          <CheckboxItem>
            <Checkbox
              type="checkbox"
              value="Cough"
              id="symptom1"
              checked={symptoms.includes("Cough")}
              onChange={(e) => handleSymptomChange("Cough", e.target.checked)}
            />
            <Label htmlFor="symptom1">Cough</Label>
          </CheckboxItem>
          <CheckboxItem>
            <Checkbox
              type="checkbox"
              value="Fever"
              id="symptom2"
              checked={symptoms.includes("Fever")}
              onChange={(e) => handleSymptomChange("Fever", e.target.checked)}
            />
            <Label htmlFor="symptom2">Fever</Label>
          </CheckboxItem>
        </Col>
        <Col>
          <CheckboxItem>
            <Checkbox
              type="checkbox"
              value="Headache"
              id="symptom3"
              checked={symptoms.includes("Headache")}
              onChange={(e) =>
                handleSymptomChange("Headache", e.target.checked)
              }
            />
            <Label htmlFor="symptom3">Headache</Label>
          </CheckboxItem>
          <AddButtonContainer>
            <AddButton onClick={handleAddSymptom}>Add Symptom</AddButton>
          </AddButtonContainer>
        </Col>
      </Row>

      {/* Add the modal component */}
      <AddSymptomModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveSymptom}
      />
    </Container>
  );
};

export default SymptomsCheckbox;

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: -5px;
  width: 400px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h5`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 0 0 50%;

  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  transform: scale(1.2);
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const AddButton = styled.button`
  background-color: #6bcb77;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;
