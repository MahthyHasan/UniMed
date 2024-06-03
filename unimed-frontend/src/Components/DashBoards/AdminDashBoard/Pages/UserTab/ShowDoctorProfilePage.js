import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import ProfileBioTop from "../../ComponenetsAdminDashboard/ProfileBioTop";
import "./showDoctorProfilePage.css";
import { useParams } from "react-router-dom";
import BioFormLeft from "../../ComponenetsAdminDashboard/BioFormLeft";
import CredentialFormRight from "../../ComponenetsAdminDashboard/CredentialFormRight";
import { Button } from "react-bootstrap";
import deleteIcon from "../../../../../assets/icons2/delete-3-svgrepo-com.svg";
import DeleteProfileConfirmation from "../../ComponenetsAdminDashboard/DeleteProfileConfirmation";

function ShowDoctorProfilePage() {
  const { userId } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const [bioData, setBioData] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const fetchData = async () => {
    try {
      const [doctorResponse, bioResponse] = await Promise.all([
        axios.get(`http://localhost:8088/api/v1/doctor/${userId}`),
        axios.get(`http://localhost:8088/api/v1/doctor/bio/${userId}`)
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
    <AdminLayout>
      <div>
        <div className="row mb-2 show-doctor-profile-page">
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
        <div className="row">
          <div className="col-6">
            {doctorData && bioData && (
              <div className="LeftFormContainDiv">
                <BioFormLeft
                  userId={userId}
                  firstname={doctorData.first_name}
                  lastname={doctorData.last_name}
                  Nic={bioData.nic}
                  email={doctorData.email}
                  cntcNo={bioData.phoneNo}
                  onUpdate={fetchData}
                />
              </div>
            )}
          </div>
          <div className="col-6">
            <div className="row">
            {doctorData && (
              <div className="RightFormContainDiv">
                <CredentialFormRight
                userId={userId}
                username={doctorData.username}
                password={doctorData.password}
                email={doctorData.email}
                onUpdate2={fetchData}
                />

              </div>
            )}
            </div>
            <div className="row deleteUserProfileButtondiv ">
                  <Button className="deleteUserProfileButton" onClick={() => setModalShow(true)}>
                      <img src={deleteIcon} className="deleteUserIcon" />
                      Delete Profile 
                  </Button>
                  <DeleteProfileConfirmation
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />
            </div>
            
          </div>          
        </div>
      </div>
    </AdminLayout>
  );
}

export default ShowDoctorProfilePage;
