import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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
  const [patients, setPatients] = useState([]);
  const [date, setDate] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPatients = async () => {
      if (date) {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://localhost:8088/api/v1/medicalRecords/report/${date}`
          );
          console.log("API Response:", response.data); // Log the API response
          setPatients(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching patients:", error);
          setLoading(false);
        }
      }
    };

    fetchPatients();
  }, [date]);

  const handleGenerateReport = () => {
    if (!Array.isArray(patients)) {
      console.error("Patients data is not an array:", patients);
      return;
    }

    const filtered = patients.filter((patient) => patient.date === date);
    setFilteredPatients(filtered);
    setShowReport(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <PageContainer>
      <ReportTitle>Medical Center Daily Report</ReportTitle>
      <div className="text-center" style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
          disabled={!date || loading}
        >
          {loading ? "Loading..." : "Generate Report"}
        </Button>
      </div>

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

      {showReport && filteredPatients.length === 0 && !loading && (
        <div className="text-center" style={{ marginTop: "20px" }}>
          <p>No patients found for the selected date.</p>
        </div>
      )}
    </PageContainer>
    </Layout>
  );
}
