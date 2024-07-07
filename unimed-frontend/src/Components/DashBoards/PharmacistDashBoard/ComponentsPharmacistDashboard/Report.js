// DrugReport.js
import React from "react";
import "../../../../Css/Pharmacist/DashBoard/Report.css";

const Report = () => {
  const drugs = [
    {
      drugId: "001",
      standardDrugId: "A001",
      name: "Paracetamol",
      doseForm: "Tablet",
      doseStrength: "500mg",
      quantity: 100,
      manufacturer: "Pharma Inc.",
      expiryDate: "2025-12-31",
      availability: "In Stock",
      date: "2024-07-07",
    },
    // Add more drug entries as needed
  ];

  const downloadCSV = () => {
    const csvRows = [
      [
        "Drug ID",
        "Standard Drug ID",
        "Name",
        "Dose Form",
        "Dose Strength",
        "Quantity",
        "Manufacturer",
        "Expiry Date",
        "Availability",
        "Date",
      ],
      ...drugs.map((drug) => [
        drug.drugId,
        drug.standardDrugId,
        drug.name,
        drug.doseForm,
        drug.doseStrength,
        drug.quantity,
        drug.manufacturer,
        drug.expiryDate,
        drug.availability,
        drug.date,
      ]),
    ];

    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "drug_report.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="report-container">
      <h1>Drug Inventory Report</h1>
      <div className="report-form">
        <div className="form-row">
          <div className="form-label">Drug ID:</div>
          <div className="form-value">001</div>
        </div>
        <div className="form-row">
          <div className="form-label">Standard Drug ID:</div>
          <div className="form-value">A001</div>
        </div>
        <div className="form-row">
          <div className="form-label">Name:</div>
          <div className="form-value">Paracetamol</div>
        </div>
        <div className="form-row">
          <div className="form-label">Dose Form:</div>
          <div className="form-value">Tablet</div>
        </div>
        <div className="form-row">
          <div className="form-label">Dose Strength:</div>
          <div className="form-value">500mg</div>
        </div>
        <div className="form-row">
          <div className="form-label">Quantity:</div>
          <div className="form-value">100</div>
        </div>
        <div className="form-row">
          <div className="form-label">Manufacturer:</div>
          <div className="form-value">Pharma Inc.</div>
        </div>
        <div className="form-row">
          <div className="form-label">Expiry Date:</div>
          <div className="form-value">2025-12-31</div>
        </div>
        <div className="form-row">
          <div className="form-label">Availability:</div>
          <div className="form-value">In Stock</div>
        </div>
        <div className="form-row">
          <div className="form-label">Date:</div>
          <div className="form-value">2024-07-07</div>
        </div>
      </div>
      <button className="download-button" onClick={downloadCSV}>
        Download
      </button>
    </div>
  );
};

export default Report;
