import React, { useEffect, useState } from "react";

import Layout from "../../layout/PharmacistLayout/PharmacistLayout";

import { Scancard } from "../ComponentsPharmacistDashboard/Scancard";
import { Card } from "../ComponentsPharmacistDashboard/Card";

export default function PharmacistDashboard() {
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
        {/* Replace 'pharmacist' Name' with the retrieved username */}
        <Card />
        <Scancard />
      </Layout>
    </div>
  );
}
