import React, { useEffect, useState } from "react";
import Layout from "../../layout/PharmacistLayout/PharmacistLayout";
import QrCode from "../ComponentsPharmacistDashboard/QrCode";
import ProvideQr from "../ComponentsPharmacistDashboard/ProvideQr";

export default function ProvideMedicine() {
  return (
    <div>
      <Layout>
        <h1
          style={{
            color: "#5d13e7",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "fantasy",
            fontSize: "60px",
          }}
        >
          SCANNING
        </h1>
        <ProvideQr />
      </Layout>
    </div>
  );
}
