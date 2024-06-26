import React, { useEffect, useState } from "react";
import Personal_Info from "../ComponentsPatientDashboard/Personal_Info"; 
import Layout from "../../layout/PatientLayout/PatientLayout";
import Card from '../ComponentsPatientDashboard/Card';
import Button from "../ComponentsPatientDashboard/Button";

export default function PatientDashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const studentInfo = {
    name: "M.J.M.M Hasan",
    id: "UWU/CST/20/109",
    age: "25",
    gender: "Male",
    height: "160cm",
    weight: "65kg",
    bloodgrp: "O+",
    bmi: "12"
  };

  return (
    <div>
      <Layout>
        <h1>{username}</h1> {/* Replace 'Patient Name' with the retrieved username */}
        <Personal_Info {...studentInfo} />
        <br />
        <Card />
        <br />
      </Layout>
    </div>
  );
}
