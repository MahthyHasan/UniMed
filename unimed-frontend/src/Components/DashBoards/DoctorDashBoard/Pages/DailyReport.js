import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Importing axios for API calls

// Styled components
const PageContainer = styled(Container)`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SummaryBox = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  font-weight: bold;
  color: #333;
`;

const TableTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const ReportTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  color: #333;
`;

export default function MedicalCenterDailyReport() {
  const [patients, setPatients] = useState([]); // State to store all patients
  const [date, setDate] = useState(""); // State to store selected date
  const [filteredPatients, setFilteredPatients] = useState([]); // State to store filtered patients
  const [showReport, setShowReport] = useState(false); // State to control report visibility
  const [loading, setLoading] = useState(false); // State to show loading spinner

  // Fetching patient data from the API when the date changes
  useEffect(() => {
    const fetchPatients = async () => {
      if (date) {
        try {
          setLoading(true); // Set loading to true before making the API call
          const response = await axios.get(
            `http://localhost:8088/api/v1/medicalRecords/report/${date}`
          );
          setPatients(response.data); // Assuming response.data contains the patient records
          setLoading(false); // Set loading to false after the API call is done
        } catch (error) {
          console.error("Error fetching patients:", error);
          setLoading(false);
        }
      }
    };

    fetchPatients(); // Call the function to fetch patients
  }, [date]); // Re-run effect only when the `date` state changes

  // Filter patients based on selected date and show the report
  const handleGenerateReport = () => {
    const filtered = patients.filter((patient) => patient.date === date);
    setFilteredPatients(filtered); // Set filtered patients
    setShowReport(true); // Show the report after generating
  };

  const handlePrint = () => {
    window.print(); // Print the report
  };

  return (
    <PageContainer>
      <ReportTitle>Medical Center Daily Report</ReportTitle>

      {/* Date Picker and Generate Report button */}
      <div className="text-center" style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} // Update the selected date
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <Button
          onClick={handleGenerateReport}
          style={{
            marginLeft: "10px",
            backgroundColor: "#18cdca",
            borderColor: "#18cdca",
            color: "#fff",
          }}
          disabled={!date || loading} // Disable button if date is not selected or loading
        >
          {loading ? "Loading..." : "Generate Report"}
        </Button>
      </div>

      {/* Display report only if showReport is true and there are patients */}
      {showReport && filteredPatients.length > 0 && (
        <>
          <TableTitle>Patient Summary Details</TableTitle>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Patient ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Diagnosis</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient._id}</td>
                  <td>{patient.patientId}</td>
                  <td>{patient.date}</td>
                  <td>{patient.time}</td>
                  <td>{patient.diaognises}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <SummaryBox>
            <h5>Summary of the Day</h5>
            <p>Date: {date}</p>
            <p>Total Count of Patients: {filteredPatients.length}</p>
          </SummaryBox>

          {/* Print button */}
          <div className="text-center" style={{ marginTop: "20px" }}>
            <Button
              onClick={handlePrint}
              style={{
                backgroundColor: "#18cdca",
                borderColor: "#18cdca",
                color: "#fff",
              }}
            >
              Print Report
            </Button>
          </div>
        </>
      )}

      {/* If there are no patients for the selected date, show a message */}
      {showReport && filteredPatients.length === 0 && !loading && (
        <div className="text-center" style={{ marginTop: "20px" }}>
          <p>No patients found for the selected date.</p>
        </div>
      )}
    </PageContainer>
  );
}
