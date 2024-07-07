import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import PatientDemographicsTable from "../ComponentsDoctorDashboard/PatientDemographicsTable";
import AllergiesTable from "../ComponentsDoctorDashboard/AllergiesTable";
import MedicalInfoTable from "../ComponentsDoctorDashboard/MedicalInfoTable";
import logo from "../../../../assets/logo.png";

// Global print styles
const PrintGlobalStyles = createGlobalStyle`
  @media print {
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #fff;
    }

    .no-print {
      display: none;
    }

    .Container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: none;
      background-color: #fff;
    }

    .Header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      border-bottom: none;
      padding-bottom: 1rem;
    }

    .Logo {
      width: 100px;
      height: auto;
    }

    .UniversityInfo {
      text-align: right;
    }

    .UniversityName {
      margin: 0;
      font-weight: bold;
      color: #34495e;
    }

    .UniversityLocation {
      margin: 0;
      color: #7f8c8d;
    }

    .TitleContainer {
      text-align: center;
      margin: 2rem 0;
    }

    .Title {
      color: #2c3e50;
      margin: 0;
    }

    .Section {
      margin-bottom: 2rem;
    }

    .SectionHeading {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    /* Styles for PatientDemographicsTable */
    .PatientDemographicsTable {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .PatientDemographicsTable th,
    .PatientDemographicsTable td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: left;
    }

    .PatientDemographicsTable th {
      background-color: #f2f2f2;
    }

    /* Styles for AllergiesTable */
    .AllergiesTable {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .AllergiesTable th,
    .AllergiesTable td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: left;
    }

    .AllergiesTable th {
      background-color: #f2f2f2;
    }

    /* Styles for MedicalInfoTable */
    .MedicalInfoTable {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .MedicalInfoTable th,
    .MedicalInfoTable td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: left;
    }

    .MedicalInfoTable th {
      background-color: #f2f2f2;
    }

    /* Additional styles as needed for other components */
  }
`;

// Styled components for the page
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
  const [clinicalSummary, setClinicalSummary] = useState(null);
  const [retrievedRecId, setRetrievedRecId] = useState(null);

  useEffect(() => {
    const storedRecId = localStorage.getItem("RecordId");
    if (storedRecId) {
      setRetrievedRecId(storedRecId);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (retrievedRecId) {
        try {
          const patientID = localStorage.getItem("scannedPID");
          if (patientID) {
            const patientResponse = await axios.get(
              `http://localhost:8088/api/v1/user/${patientID}`
            );
            const patientBioResponse = await axios.get(
              `http://localhost:8088/api/v1/user/bio/${patientID}`
            );
            setPatientData({
              ...patientResponse.data,
              ...patientBioResponse.data,
            });
            const clinicalSummaryResponse = await axios.get(
              `http://localhost:8088/api/v1/medicalRecords/${retrievedRecId}`
            );
            setClinicalSummary({
              ...clinicalSummaryResponse.data,
            });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [retrievedRecId]); // Add retrievedRecId as a dependency to the useEffect

  const handlePrint = () => {
    const printWindow = window.open("Printed Medical Record");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            ${Array.from(document.getElementsByTagName("style"))
              .map((style) => style.innerHTML)
              .join("")}
          </style>
        </head>
        <body>
          ${document.getElementById("print-container").innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <PrintGlobalStyles />
      <Container id="print-container">
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
          {patientData && <PatientDemographicsTable {...patientData} />}
        </Section>

        <Section>
          <SectionHeading>Allergies</SectionHeading>
          {patientData && patientData.allergies ? (
            <AllergiesTable item1={patientData.allergies} />
          ) : (
            <p>Loading...</p>
          )}
        </Section>

        <Section>
          <SectionHeading>Clinical Summary</SectionHeading>
          {clinicalSummary ? (
            <MedicalInfoTable {...clinicalSummary} />
          ) : (
            <p>Loading...</p>
          )}
        </Section>
        <Section>
        <UniversityLocation>
        ......................................
            </UniversityLocation>
          <SectionHeading>Doctor's Signature</SectionHeading>
        </Section>
      </Container>

      <ButtonContainer className="no-print">
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleBack}>Back</Button>
      </ButtonContainer>
    </>
  );
};

export default RecordDetailsPage;
