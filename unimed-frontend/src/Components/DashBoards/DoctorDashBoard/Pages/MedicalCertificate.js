import React from "react";
import styled from "styled-components";
import logo from "../../../../assets/logo.png";

// Styled components for the certificate
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
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

const Content = styled.div`
  margin: 2rem 0;
  line-height: 1.6;
  color: #2c3e50;
`;

const SignatureSection = styled.div`
  margin-top: 3rem; /* Added space to make sure the section is visible */
  text-align: right;
  position: relative; /* Ensure positioning for the text */
`;

const SignatureLine = styled.p`
  margin: 0;
  font-weight: bold;
  color: #000;
  padding-top: 30px; /* Adjusted padding */
  border-top: 1px solid #7f8c8d;
  width: 200px;
  display: inline-block;
  position: relative;
`;

const DoctorSignature = styled.p`
  margin-top: 1rem; /* Increased margin for better visibility */
  font-weight: bold;
  color: #000; /* Ensures that the text is not the same as the background */
  position: absolute;
  right: 0;
  top: 60px; /* Adjust this value for vertical positioning */
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #18cdca;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

// Component
const MedicalCertificate = () => {
  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Back function
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container>
      {/* Header with Logo and University Information */}
      <Header>
        <Logo src={logo} alt="University Logo" />
        <UniversityInfo>
          <UniversityName>University Medical Center</UniversityName>
          <UniversityLocation>
            Uva Wellassa University of Sri Lanka
          </UniversityLocation>
        </UniversityInfo>
      </Header>

      {/* Title */}
      <TitleContainer>
        <Title>Medical Certificate</Title>
      </TitleContainer>

      {/* Content of the certificate */}
      <Content>
        <p>Date: [Insert Current Date]</p>

        <p>To Whom It May Concern,</p>

        <p>
          This is to certify that [Student's Full Name], student ID [Student ID
          Number], of [University Name], has been under my care from [Start
          Date] to [End Date].
        </p>

        <p>
          During this period, the student was suffering from [Specify Illness or
          Condition], which rendered them unfit to attend classes. As a result,
          they were unable to participate in academic activities on the
          following dates: [List Date(s) of Absence].
        </p>

        <p>
          <strong>Details:</strong>
        </p>
        <p>Patient's Name: [Student's Full Name]</p>
        <p>Patient's ID: [Student ID Number]</p>
        <p>Date of Examination: [Date of Medical Examination]</p>
        <p>Diagnosis: [Brief Description of Illness/Condition]</p>
        <p>Medical Advice: [Specify Rest Period or Medical Recommendations]</p>
        <p>Doctor's Remarks: [Any additional comments, if applicable]</p>

        <p>
          Based on the diagnosis, I recommend that the student be excused from
          academic responsibilities during the above-mentioned period. The
          student is now fit to resume regular activities as of [Insert Date].
        </p>

        <p>
          <strong>Doctor's Information:</strong>
        </p>
        <p>Doctor's Name: [Doctor's Full Name]</p>
        <p>Medical Registration Number: [Doctor's Registration Number]</p>
        <p>Clinic/Hospital Name: [Name of the Clinic or Hospital]</p>
        <p>Contact Information: [Clinic Address, Phone Number]</p>

        <p>
          This certificate is issued at the request of the student for academic
          purposes.
        </p>

        <p>Sincerely,</p>
        <p>[Doctor's Full Name]</p>
        <p>[Doctor's Signature]</p>
        <p>[Doctor's Contact Information]</p>
      </Content>

      {/* Doctor's signature */}
      <SignatureSection>
        <SignatureLine>......................................</SignatureLine>
        <DoctorSignature>Doctor's Signature</DoctorSignature>
      </SignatureSection>

      {/* Buttons for Print and Back */}
      <ButtonSection>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handlePrint}>Print</Button>
      </ButtonSection>
    </Container>
  );
};

export default MedicalCertificate;
