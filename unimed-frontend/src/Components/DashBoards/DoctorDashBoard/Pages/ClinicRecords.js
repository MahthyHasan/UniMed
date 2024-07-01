import React from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import ProfileCard from "../../../Pages/ProfileCard";
import { Backbutton } from "../ComponentsDoctorDashboard/Backbutton";
import MainDescription from "../ComponentsDoctorDashboard/MainDescription";
import Allergies from "../../../Pages/Allergies";
import LastDiagnosis from "../ComponentsDoctorDashboard/LastDiagnosis";
import PreviousRecords from "../ComponentsDoctorDashboard/PreviousRecords";
import NewRecordButton from "../ComponentsDoctorDashboard/NewRecordButton";

export default function ClinicRecords() {
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
            {/* Allergieitem component goes here */}
            <Allergies item1="Tomato" item2="Amoxiline" />
          </div>
        </div>

        {/* Third Section */}
        <div className="row">
          <div className="col">
            {/* Lastdiagnosis component goes here */}
            <LastDiagnosis
              symptom1="Cough"
              symptom2="Runny Nose"
              symptom3="Tonsils"
              diagnosis1="Viral Fever"
              presmed1="Paracetamol"
              presmed2="citrecine"
            />
          </div>
        </div>

        {/* Fourth Section */}
        <div className="row">
          <div className="col">
            {/* Previous record component goes here */}
            <PreviousRecords
              RecId="RID: 789564"
              Date="10.42 a.m"
              Time="26/05/2024"
              DaySinceLast="4 days ago"
            />
          </div>
        </div>
        {/* Add the new Button component */}
        <div className="row">
          <div className="col d-flex justify-content-end mt-3">
            <NewRecordButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}
