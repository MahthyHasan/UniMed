import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../ComponentsPharmacistDashboard/ProfileCard";
import MainDescription from "../ComponentsPharmacistDashboard/MainDescription";
import PharmacistLayout from "../../layout/PharmacistLayout/PharmacistLayout";
import IssuedPrescription from "../ComponentsPharmacistDashboard/IssuedPrescription";

function SupplyMedicinePharmacist() {
  const [doctorData, setDoctorData] = useState(null);
  const [bioData, setBioData] = useState(null);
  const [scannedPID, setScannedPID] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    const patientID = localStorage.getItem('scannedPID');
    if (patientID) {
      setScannedPID(patientID);
    }
  }, []);

  const fetchData = async () => {
    if (scannedPID) {
      try {
        const [doctorResponse, bioResponse, medicalRecordsResponse] = await Promise.all([
          axios.get(`http://localhost:8088/api/v1/user/${scannedPID}`),
          axios.get(`http://localhost:8088/api/v1/user/bio/${scannedPID}`),
          axios.get(`http://localhost:8088/api/v1/medicalRecords/pending/${scannedPID}`)
        ]);
        setDoctorData(doctorResponse.data);
        setBioData(bioResponse.data);
        setMedicalRecords(medicalRecordsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [scannedPID]);

  const calculateBMI = (weight, height) => {
    if (!weight || !height) return null;
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const bmi = bioData ? calculateBMI(bioData.weight, bioData.height) : null;

  const handleIssueMedicine = async (recordId) => {
    try {
      await axios.put(`http://localhost:8088/api/v1/medicalRecords/updateDrugIssuedStatus/${recordId}`, null, {
        params: { status: true }
      });
      fetchData();
      window.location.href = `/ClinicForPharmacist`;
    } catch (error) {
      console.error("Error updating drug issued status:", error);
    }
  };

  if (!doctorData || !bioData) {
    return <div>Loading...</div>;
  }

  return (
    <PharmacistLayout>
      <div className="container-fluid">
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
          <div className="row">
            <div className="col-12">
              {medicalRecords.map((record) => (
                <IssuedPrescription key={record._id} record={record} onIssue={() => handleIssueMedicine(record._id)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PharmacistLayout>
  );
}

export default SupplyMedicinePharmacist;
