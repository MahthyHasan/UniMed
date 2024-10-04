import React, { useEffect, useState } from "react";
import Layout from "../../layout/PatientLayout/PatientLayout";
import Table from "../ComponentsPatientDashboard/Table";
import axios from "axios";

export default function MyRecord() {
  const [username, setUsername] = useState("");
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPatientId = localStorage.getItem("patientId");

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedPatientId) {
      axios
        .get(
          `http://localhost:8088/api/v1/medicalRecords/all/${storedPatientId}`
        )
        .then((response) => {
          setMedicalRecords(response.data);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the medical records!",
            error
          );
        });
    }
  }, []);

  return (
    <div>
      <Layout>
        <h1>{username}'s Medical Records</h1>
        <Table data={medicalRecords} />
      </Layout>
    </div>
  );
}
