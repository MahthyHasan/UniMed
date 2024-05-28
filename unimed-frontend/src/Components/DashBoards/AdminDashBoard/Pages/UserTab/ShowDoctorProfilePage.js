import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import ProfileBioTop from "../../ComponenetsAdminDashboard/ProfileBioTop";
import "./showDoctorProfilePage.css";
import { useParams } from "react-router-dom";

function ShowDoctorProfilePage() {
  const { userId } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const [bioData, setBioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorResponse, bioResponse] = await Promise.all([
          axios.get(`http://localhost:8088/api/v1/doctor/${userId}`),
          axios.get(`http://localhost:8088/api/v1/doctor/bio/${userId}`)
        ]);
        // Assuming your APIs return objects containing doctor and bio data respectively
        setDoctorData(doctorResponse.data);
        setBioData(bioResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <AdminLayout>
      <div className="show-doctor-profile-page">
        {/* Check if both doctorData and bioData are available before rendering ProfileBioTop */}
        {doctorData && bioData && (
          <ProfileBioTop
            id={userId}
            name={doctorData.first_name}
            age={bioData.age}
            gender={bioData.gender}
            height={bioData.height}
            weight={bioData.weight}
            bloodgrp={bioData.bloodGroup}
          />
        )}
      </div>
    </AdminLayout>
  );
}

export default ShowDoctorProfilePage;
