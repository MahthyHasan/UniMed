import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PatientDemographicsTable from "../ComponentsDoctorDashboard/PatientDemographicsTable";
import AllergiesTable from "../ComponentsDoctorDashboard/AllergiesTable";
import MedicalInfoTable from "../ComponentsDoctorDashboard/MedicalInfoTable";
import logo from "../../../../assets/logo.png"; 

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 1rem;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const UniversityInfo = styled.div`
  text-align: right;
`;

const UniversityName = styled.p`
  margin: 0;
  font-weight: bold;
  color: #34495e;
`;

const UniversityLocation = styled.p`
  margin: 0;
  color: #7f8c8d;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin: 0;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionHeading = styled.h6`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #18cdca;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #218838;
  }
`;

const RecordDetailsPage = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState(null);
  const [allergies, setAllergies] = useState(null);
  const [clinicalSummary, setClinicalSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientID = localStorage.getItem("scannedPID");
        if (patientID) {
          const patientResponse = await axios.get(
            `http://localhost:8088/api/v1/user/${patientID}`
          );
          const allergiesResponse = await axios.get(
            `http://localhost:8088/api/v1/user/allergies/${patientID}`
          );
          const clinicalSummaryResponse = await axios.get(
            `http://localhost:8088/api/v1/medicalRecords/summary/${patientID}`
          );

          setPatientData(patientResponse.data);
          setAllergies(allergiesResponse.data);
          setClinicalSummary(clinicalSummaryResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="University Logo" />
        <UniversityInfo>
          <UniversityName>University Medical Center</UniversityName>
          <UniversityLocation>
            Uva Wellassa University of Sri Lanka
          </UniversityLocation>
        </UniversityInfo>
      </Header>

      <TitleContainer>
        <Title>Medical Record Details</Title>
      </TitleContainer>

      <Section>
        <SectionHeading>Patient Demographics</SectionHeading>
        <PatientDemographicsTable {...patientData} />
      </Section>

      <Section>
        <SectionHeading>Allergies</SectionHeading>
        <AllergiesTable item1={allergies} />
      </Section>

      <Section>
        <SectionHeading>Clinical Summary</SectionHeading>
        <MedicalInfoTable {...clinicalSummary} />
      </Section>

      <ButtonContainer>
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleBack}>Back</Button>
      </ButtonContainer>
    </Container>
  );
};

export default RecordDetailsPage;
