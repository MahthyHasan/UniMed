import React, { useEffect, useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProfileBioTop from "../../AdminDashBoard/ComponenetsAdminDashboard/ProfileBioTop";

function PatientClinicProfile() {
    const { userId } = useParams();
    const [doctorData, setDoctorData] = useState(null);
  const [bioData, setBioData] = useState(null);
  const fetchData = async () => {
    try {
      const [doctorResponse, bioResponse] = await Promise.all([
        axios.get(`http://localhost:8088/api/v1/user/${userId}`),
        axios.get(`http://localhost:8088/api/v1/user/bio/${userId}`)
      ]);
      setDoctorData(doctorResponse.data);
      setBioData(bioResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <Layout>
        <div className="row mb-2">
        {doctorData && bioData && (
            <ProfileBioTop
              id={userId}
              name={doctorData.firstName}
              age={bioData.age}
              gender={bioData.gender}
              height={bioData.height}
              weight={bioData.weight}
              bloodgrp={bioData.bloodGroup}
              type= "Patient"
            />
          )}
        </div>
    </Layout>
  )
}

export default PatientClinicProfile
