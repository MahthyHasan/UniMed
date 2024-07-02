import React, { useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import ProfileCard from "../../../DashBoards/DoctorDashBoard/ComponentsDoctorDashboard/ProfileCard";
import { Backbutton } from "../ComponentsDoctorDashboard/Backbutton";
import MainDescription from "../ComponentsDoctorDashboard/MainDescription";
import Allergies from "../../../DashBoards/DoctorDashBoard/ComponentsDoctorDashboard/Allergies";
import CurrentRecord from "../ComponentsDoctorDashboard/CurrentRecord";
import IssuedButton from "../ComponentsDoctorDashboard/IssuedButton";
import SymptomsCheckbox from "../ComponentsDoctorDashboard/SymptomsCheckbox";
import DiagnosisTextbox from "../ComponentsDoctorDashboard/DiagnosisTextbox";
import DrugsPrescription from "../ComponentsDoctorDashboard/DrugsPrescription";

export default function Prescription() {
  const [symptoms, setSymptoms] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [prescribedDrugs, setPrescribedDrugs] = useState([]);
  const [currentDiagnosis, setCurrentDiagnosis] = useState("");

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
            <Allergies item1="Tomato" item2="Amoxiline" />
          </div>
        </div>

        {/* Third Section */}
        <div className="row">
          <div className="col-md-4">
            <SymptomsCheckbox symptoms={symptoms} setSymptoms={setSymptoms} />
          </div>
          <div className="col-md-4">
            <DiagnosisTextbox
              diagnoses={diagnoses}
              setDiagnoses={setDiagnoses}
              currentDiagnosis={currentDiagnosis}
              setCurrentDiagnosis={setCurrentDiagnosis}
            />
          </div>
          <div className="col-md-4">
            <DrugsPrescription setPrescribedDrugs={setPrescribedDrugs} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CurrentRecord
              symptoms={symptoms}
              diagnoses={diagnoses}
              prescribedDrugs={prescribedDrugs}
            />
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-end mt-3">
            <IssuedButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}
