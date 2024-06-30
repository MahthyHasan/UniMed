import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const SymptomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 10px;
  gap: ${(props) => props.gutter / 2}px;
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
  width:100px;
  font-size:13px;
`;
const Heading = styled.h4`
  font-weight: 500;
  color: #000;
  padding-bottom:0px;
  margin-bottom:0px;
  padding-top:10px;
`;


const SymptomList = () => {
  return (
    <Row>
      <Heading>
        <h4>Symptoms</h4>
      </Heading>
      <Col md={2}>
        <SymptomListContainer gutter={gutter}>
          <SymptomItem>
            <SymptomText>Symptom 1</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
          <SymptomItem>
            <SymptomText>Symptom 3</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
          <SymptomItem>
            <SymptomText>Symptom 5</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
        </SymptomListContainer>
      </Col>
      <Col md={2}>
        <SymptomListContainer gutter={gutter}>
          <SymptomItem>
            <SymptomText>Symptom 2</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
          <SymptomItem>
            <SymptomText>Symptom 4</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
          <SymptomItem>
            <SymptomText>Symptom 6</SymptomText>
            <CheckboxWrapper type="checkbox" />
          </SymptomItem>
          <AddSymptomButton
            variant="primary"
            className="d-flex justify-content-end"
          >
            Add Symptom
          </AddSymptomButton>
        </SymptomListContainer>
      </Col>
    </Row>
  );
};

export default SymptomList;
