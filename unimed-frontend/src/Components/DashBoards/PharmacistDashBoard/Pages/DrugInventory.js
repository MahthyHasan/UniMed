import React, { useEffect, useState } from "react";
import Drug from "../ComponentsPharmacistDashboard/Drug";
import Layout from "../../layout/PharmacistLayout/PharmacistLayout";

export default function DrugInventory() {
  return (
    <div>
      <Layout>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          {/* Table structure */}
        </table>
        <h1
          style={{ color: "#5d13e7", textAlign: "center", fontWeight: "bold" }}
        >
          Drug Inventory Details
        </h1>

        <Drug />
      </Layout>
    </div>
  );
}
