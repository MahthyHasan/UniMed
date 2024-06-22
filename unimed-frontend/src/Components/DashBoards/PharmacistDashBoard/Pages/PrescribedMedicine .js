import React from "react";
import Medicine from "../ComponentsPharmacistDashboard/Medicine.js"; // Correct the path if needed
import Layout from "../../layout/PharmacistLayout/PharmacistLayout"; // Correct the path if needed

export default function PrescribedMedicine() {
  return (
    <div>
      <Layout>
        <h1 style={{ color: '#5d13e7', fontWeight: 'bold', fontFamily: 'fantasy', fontSize: '40px' }}>Prescribed Medicine</h1>


        <Medicine />
      </Layout>
    </div>
  );
}
