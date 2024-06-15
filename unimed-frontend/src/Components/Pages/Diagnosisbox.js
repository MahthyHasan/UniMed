import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const SymptomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 30px;
`;

const SymptomItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SymptomText = styled.span`
  font-weight: 400;
  color: #000000;
`;

const CheckboxWrapper = styled(Form.Check)`
  & .form-check-input {
    border-width: 2px;
    border-color: #000000;
    &:checked {
      background-color: #6bcb77;
      border-color: #6bcb77;
    }
  }
`;

const AddSymptomButton = styled(Button)`
  background-color: #6bcb77;
  border-color: #6bcb77;
  width: 100px;
  font-size: 13px;
`;

const Heading = styled.h4`
  font-weight: 500;
  color: #000;
  margin: 0;
  padding: 0;
`;

const DiagnosisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 30px;
`;

const DiagnosisInput = styled(Form.Control)`
  width: 100%;
`;

const DiagnosisButton = styled(Button)`
  background-color: #6bcb77;
  border-color: #6bcb77;
  width: 100px;
  font-size: 13px;
`;

const Diagnosisbox = () => {
  return (
    <Row>
      <Col md={4}>
        <Heading>Diagnosis</Heading>
        <DiagnosisContainer>
          <DiagnosisInput
            as="textarea"
            rows={3}
            placeholder="Enter Diagnosis"
          />
          <DiagnosisButton variant="primary">Add Diagnosis</DiagnosisButton>
        </DiagnosisContainer>
      </Col>
      <Col md={2}>
        <SymptomListContainer>
          <SymptomItem>
            <SymptomText>Symptom 1</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
          {/* Rest of the SymptomList */}
        </SymptomListContainer>
      </Col>
      <Col md={2}>{/* Rest of the SymptomList */}</Col>
    </Row>
  );
};

export default Diagnosisbox;
