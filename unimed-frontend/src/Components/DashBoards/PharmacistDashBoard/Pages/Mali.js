import React from "react";
import MediDrugs from "../ComponentsPharmacistDashboard/MediDrugs.js"; // Make sure this path is correct
import Layout from "../../layout/PharmacistLayout/PharmacistLayout";

export default function Mali() {
  return (
    <div>
      <Layout>
        <MediDrugs />
      </Layout>
    </div>
  );
}
