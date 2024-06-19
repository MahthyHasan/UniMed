import React, { useEffect, useState } from "react";
import Layout from "../../layout/PharmacistLayout/PharmacistLayout";
import QrCode from "../ComponentsPharmacistDashboard/QrCode";

export default function ProvideMedicine() {
  return (
    <div>
      <Layout>
        <h1
          style={{ color: "#5d13e7", textAlign: "center", fontWeight: "bold" }}
        >
          Scanning
        </h1>
      </Layout>
      <h1>Provide Medicine Page</h1>
    </div>
  );
}
