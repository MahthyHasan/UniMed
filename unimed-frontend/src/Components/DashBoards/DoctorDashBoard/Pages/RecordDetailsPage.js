import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components for a professional look
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #34495e;
`;

const Value = styled.p`
  margin-bottom: 1rem;
  color: #7f8c8d;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #6bcb77;
  cursor: pointer;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #218838;
  }
`;

const RecordDetailsPage = () => {
  const { recordId } = useParams();
  const navigate = useNavigate();

  // Simulated record data
  const record = {
    _id: recordId,
    date: "2024-07-04",
    time: "10:00 AM",
    symptoms: ["Fever", "Cough"],
    diagnoses: ["Common Cold"],
    prescribedMedicines: ["Paracetamol", "Cough Syrup"],
    doctorId: "12345",
    drugIssued: true,
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>Medical Record Details</Header>
      <Section>
        <Label>Record ID:</Label>
        <Value>{record._id}</Value>
      </Section>
      <Section>
        <Label>Date:</Label>
        <Value>{record.date}</Value>
      </Section>
      <Section>
        <Label>Time:</Label>
        <Value>{record.time}</Value>
      </Section>
      <Section>
        <Label>Symptoms:</Label>
        <Value>{record.symptoms.join(", ")}</Value>
      </Section>
      <Section>
        <Label>Diagnoses:</Label>
        <Value>{record.diagnoses.join(", ")}</Value>
      </Section>
      <Section>
        <Label>Prescribed Medicines:</Label>
        <Value>{record.prescribedMedicines.join(", ")}</Value>
      </Section>
      <Section>
        <Label>Doctor ID:</Label>
        <Value>{record.doctorId}</Value>
      </Section>
      <Section>
        <Label>Drug Issued:</Label>
        <Value>{record.drugIssued ? "Yes" : "No"}</Value>
      </Section>
      <ButtonContainer>
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleBack}>Back</Button>
      </ButtonContainer>
    </Container>
  );
};

export default RecordDetailsPage;
