import React, { useState } from "react";
import Layout from "../DashBoards/layout/DoctorLayout/DoctorLayouts";
import ProfileCard from "./ProfileCard";
import { Backbutton } from "./Backbutton";
import MainDescription from "./MainDescription";
import Allergies from "./Allergies";
import PreviousRecords from "./PreviousRecords";
import NewRecordButton from "./NewRecordButton";
import CurrentRecord from "./CurrentRecord";
import IssuedButton from "./IssuedButton";
import SymptomsCheckbox from "./SymptomsCheckbox";
import DiagnosisTextbox from "./DiagnosisTextbox";
import DrugsPrescription from "./DrugsPrescription";

export default function Prescription() {
  const [symptoms, setSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [prescribedDrugs, setPrescribedDrugs] = useState([]);

  return (
    <Layout>
      <div className="row">
        <Backbutton />
      </div>
      <div className="back-button-container"></div>
      <div className="container-fluid">
        {/* First Section */}
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-start mb-3">
              <ProfileCard
                profileImage="https://via.placeholder.com/150"
                studentName="M.J.M.M Hasan"
                studentId="UWU/CST/20/109"
              />
            </div>
          </div>
          <div className="col-md-6">
            {/* MainDescription component goes here */}
            <MainDescription
              age="25"
              gender="Male"
              blood="O+"
              height="160cm"
              weight="65Kg"
              bmi="12"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="row">
          <div className="col">
            {/* Allergies component goes here */}
            <Allergies item1="Tomato" item2="Amoxiline" />
          </div>
        </div>

        {/* Third Section */}
        <div className="row">
          <div className="col-md-4">
            {/* Symptoms Section */}
            <div>
              {/* Symptoms Checkboxes */}
              <SymptomsCheckbox symptoms={symptoms} setSymptoms={setSymptoms} />
            </div>
          </div>
          <div className="col-md-4">
            {/* Diagnosis Section */}
            <div>
              {/* Diagnosis Textbox */}
              <DiagnosisTextbox
                diagnosis={diagnosis}
                setDiagnosis={setDiagnosis}
              />
            </div>
          </div>
          <div className="col-md-4">
            {/* Drugs Prescription Section */}
            <div>
              {/* Drugs, Dosage, and No. of Days Dropdowns */}
              <DrugsPrescription setPrescribedDrugs={setPrescribedDrugs} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {/* CurrentRecord component goes here */}
            <CurrentRecord
              symptoms={symptoms}
              diagnosis={diagnosis}
              prescribedDrugs={prescribedDrugs}
            />
          </div>
        </div>
        {/* Add the new Button component */}
        <div className="row">
          <div className="col d-flex justify-content-end mt-3">
            <IssuedButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}
