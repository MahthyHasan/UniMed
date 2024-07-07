import React from "react";
import Report from "../ComponentsPharmacistDashboard/Report.js"; // Make sure this path is correct
import Layout from "../../layout/PharmacistLayout/PharmacistLayout";

export default function PharmacyReport() {
  return (
    <div>
      <Layout>
        <Report />
      </Layout>
    </div>
  );
}
