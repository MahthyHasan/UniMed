import React, { useEffect, useState } from "react";

import Layout from "../../layout/PatientLayout/PatientLayout";

import { Scancard } from "../ComponentsPatientDashboard/Scancard";
import { Card } from "../ComponentsPatientDashboard/Card";

export default function PatientDashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <Layout>
        <h1>{username}</h1>{" "}
        {/* Replace 'Patient' Name' with the retrieved username */}
        <Card />
        <Scancard />
      </Layout>
    </div>
  );
}
