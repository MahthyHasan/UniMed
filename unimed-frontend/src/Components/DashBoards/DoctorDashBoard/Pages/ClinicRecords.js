import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import ProfileCard from "../ComponentsDoctorDashboard/ProfileCard";
import { Backbutton } from "../ComponentsDoctorDashboard/Backbutton";
import MainDescription from "../ComponentsDoctorDashboard/MainDescription";
import Allergies from "../ComponentsDoctorDashboard/Allergies";
import LastDiagnosis from "../ComponentsDoctorDashboard/LastDiagnosis";
import PreviousRecords from "../ComponentsDoctorDashboard/PreviousRecords";
import NewRecordButton from "../ComponentsDoctorDashboard/NewRecordButton";
import styled from "styled-components";

const Heading = styled.h4`
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: 550;
`;


export default function ClinicRecords() {
    const [doctorData, setDoctorData] = useState(null);
    const [bioData, setBioData] = useState(null);
    const [scannedPID, setScannedPID] = useState(null);
    const [medicalRecords, setMedicalRecords] = useState([]);

    useEffect(() => {        
        const patientID = localStorage.getItem('scannedPID');
        console.log('Retrieved patientID from localStorage:', patientID); // Debug log
        if (patientID) {
            setScannedPID(patientID);            
        }
    }, []);

    const fetchData = async () => {
        if (scannedPID) { // Check if scannedPID is not null or undefined
            try {
                const [doctorResponse, bioResponse, medicalRecordsResponse] = await Promise.all([
                    axios.get(`http://localhost:8088/api/v1/user/${scannedPID}`),
                    axios.get(`http://localhost:8088/api/v1/user/bio/${scannedPID}`),
                    axios.get(`http://localhost:8088/api/v1/medicalRecords/all/${scannedPID}`)
                ]);
                setDoctorData(doctorResponse.data);
                setBioData(bioResponse.data);
                setMedicalRecords(medicalRecordsResponse.data);                
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    console.error("Request data:", error.request);
                } else {
                    console.error("Error message:", error.message);
                }
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [scannedPID]);

    const calculateBMI = (weight, height) => {
        if (!weight || !height) return null;
        const heightInMeters = height / 100; // assuming height is in cm
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    };

    const bmi = bioData ? calculateBMI(bioData.weight, bioData.height) : null;

    if (!doctorData || !bioData) {
        return <div>Loading...</div>;
    }

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
                  studentName={doctorData.firstName}
                  studentId={scannedPID}
                />
              </div>
            </div>
            <div className="col-md-6">
              {/* MainDescription component goes here */}
              <MainDescription
                age={bioData.age}
                gender={bioData.gender}
                blood={bioData.bloodGroup}
                height={bioData.height}
                weight={bioData.weight}
                bmi={bmi ? bmi : ""}
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="row">
            <div className="col">
              {/* Allergies component goes here */}
              <Allergies item1={bioData.allergies} />
            </div>
          </div>

          {/* Third Section */}
          <div className="row">
            <div className="col">
              {/* LastDiagnosis component goes here */}
              <LastDiagnosis patientId={scannedPID} />
            </div>
          </div>

          {/* Fourth Section */}
          <Heading>Previous Records</Heading>
          <div className="row">
            <div className="col">
              {/* PreviousRecords component goes here */}
              {medicalRecords.map((record) => (                
                <PreviousRecords
                  key={record._id}
                  RecId={record._id}
                  Date={record.date}
                  Time={record.time}
                  DaySinceLast={`${Math.floor(
                    (new Date() - new Date(record.date)) / (1000 * 60 * 60 * 24)
                  )} days ago`}
                />
              ))}
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
