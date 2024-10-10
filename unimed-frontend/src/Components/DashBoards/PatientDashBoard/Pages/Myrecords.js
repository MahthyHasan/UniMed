import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../layout/PatientLayout/PatientLayout";
import Table from "../ComponentsPatientDashboard/Table";

import styled from "styled-components";

const Heading = styled.h4`
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: 550;
`;

export default function MyRecords() {
  const [username, setUsername] = useState("");
  const [scannedPID, setScannedPID] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);
    }


    const patientID = localStorage.getItem("scannedPID");
    if (patientID) {
      setScannedPID(patientID);
    }
  }, []);

  useEffect(() => {
    if (scannedPID) {
      // Fetch medical records for the patient
      const fetchRecords = async () => {
        try {
          const response = await axios.get(`http://localhost:8088/api/v1/medicalRecords/all/${scannedPID}`);
          console.log(response.data); // Log to check the structure of fetched data
          setMedicalRecords(response.data);
        } catch (error) {
          console.error("Error fetching medical records:", error);
        }
      };

      fetchRecords();
    }
  }, [scannedPID]);

  return (
    <div>
      <Layout>
        <Table data={medicalRecords} />
      </Layout>
    </div>
  );
}
