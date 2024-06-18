import React from "react";
import Drug from "../ComponentsPharmacistDashboard/Drug.js"; // Make sure this path is correct
import Layout from "../../layout/PharmacistLayout/PharmacistLayout";

export default function DrugInvestory() {
  return (
    <div>
      <Layout>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          {/* Table structure */}
        </table>
        <h1
          style={{
            color: "#5d13e7",

            fontWeight: "bold",
            fontFamily: "fantasy",
            fontSize: "40px",
          }}
        >
          Drug Inventory Details {/* Corrected typo */}
        </h1>

        <Drug />
      </Layout>
    </div>
  );
}
