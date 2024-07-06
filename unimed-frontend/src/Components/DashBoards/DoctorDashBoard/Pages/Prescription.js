import React, { useEffect, useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import ProfileCard from "../../../DashBoards/DoctorDashBoard/ComponentsDoctorDashboard/ProfileCard";
import { Backbutton } from "../ComponentsDoctorDashboard/Backbutton";
import { useNavigate } from "react-router-dom";
import MainDescription from "../ComponentsDoctorDashboard/MainDescription";
import Allergies from "../../../DashBoards/DoctorDashBoard/ComponentsDoctorDashboard/Allergies";
import CurrentRecord from "../ComponentsDoctorDashboard/CurrentRecord";
import IssuedButton from "../ComponentsDoctorDashboard/IssuedButton";
import SymptomsCheckbox from "../ComponentsDoctorDashboard/SymptomsCheckbox";
import DiagnosisTextbox from "../ComponentsDoctorDashboard/DiagnosisTextbox";
import DrugsPrescription from "../ComponentsDoctorDashboard/DrugsPrescription";
import axios from "axios";

export default function Prescription() {
	const [symptoms, setSymptoms] = useState([]);
	const [diagnoses, setDiagnoses] = useState([]);
	const [prescribedDrugs, setPrescribedDrugs] = useState([]);
	const [currentDiagnosis, setCurrentDiagnosis] = useState("");
	const [scannedPID, setScannedPID] = useState(null);
	const [docID, setDocID] = useState(null);
	const [doctorData, setDoctorData] = useState(null);
	const [bioData, setBioData] = useState(null);
	const [medicalRecords, setMedicalRecords] = useState([]);
	const status = false;
  
	 const navigate = useNavigate();
  
	useEffect(() => {
	  const patientID = localStorage.getItem("scannedPID");
	  const RdocID = localStorage.getItem("doctor_id");
  
	  console.log("Retrieved patientID from localStorage:", patientID); // Debug log
	  console.log("Retrieved doctorID from localStorage:", RdocID); // Debug log
  
	  if (patientID) {
		setScannedPID(patientID);
		setDocID(RdocID);
	  }
	}, []);
  
	const fetchData = async () => {
	  if (scannedPID) {
		// Check if scannedPID is not null or undefined
		try {
		  const [doctorResponse, bioResponse, medicalRecordsResponse] =
			await Promise.all([
			  axios.get(`http://localhost:8088/api/v1/user/${scannedPID}`),
			  axios.get(`http://localhost:8088/api/v1/user/bio/${scannedPID}`),
			  axios.get(
				`http://localhost:8088/api/v1/medicalRecords/all/${scannedPID}`
			  ),
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
  
	const registerMedicalRecord = async () => {
	  const currentDate = new Date();
	  const formattedDate = currentDate.toISOString().split("T")[0];
	  const formattedTime = currentDate.toTimeString().split(" ")[0];
  
	  // Transform prescribedDrugs to the desired format
	  const transformedPrescribedDrugs = prescribedDrugs.map(
		(drug) => `${drug.drug} ${drug.dosage} ${drug.days}`
	  );
  
	  const newRecord = {
		patientId: scannedPID,
		symptoms: symptoms,
		diaognises: diagnoses,
		priscripedMedicines: transformedPrescribedDrugs, // Use the transformed array
		date: formattedDate,
		time: formattedTime,
		doctorId: docID,
		drugIssued: status,
	  };
  
	  console.log("New Record:", newRecord);
  
	  // Validate data before sending
	  if (!scannedPID || !docID) {
		console.error("Patient ID or Doctor ID is missing.");
		return;
	  }
  
	  try {
		const response = await axios.post(
		  "http://localhost:8088/api/v1/medicalRecords/save",
		  newRecord
		);
		console.log("Response Data:", response.data);
		alert("Medical Record registered successfully.");
		navigate(`/success/${response.data.id}`);
	  } catch (error) {
		console.error("Error registering medical record:", error);
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
	};
  
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
            <Allergies item1={bioData.allergies} />
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
            <button
              onClick={registerMedicalRecord}
              style={{
                backgroundColor: "#6BCB77",
                color: "#ffffff",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Issue Record
            </button>
          </div>
        </div>
      </div>
    </Layout>
	);
}
