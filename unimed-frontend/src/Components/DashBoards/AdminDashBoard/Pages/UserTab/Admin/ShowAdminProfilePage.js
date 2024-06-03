import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import ProfileBioTop from "../../../ComponenetsAdminDashboard/ProfileBioTop";
import "./showAdminProfilePage.css";
import { useParams } from "react-router-dom";
import BioFormLeft from "../../../ComponenetsAdminDashboard/BioFormLeft";
import CredentialFormRight from "../../../ComponenetsAdminDashboard/CredentialFormRight";
import { Button } from "react-bootstrap";
import deleteIcon from "../../../../../../assets/icons2/delete-3-svgrepo-com.svg";
import DeleteProfileConfirmation from "../../../ComponenetsAdminDashboard/DeleteProfileConfirmation";

function ShowAdminProfilePage() {
    const { userId } = useParams();
  const [adminData, setAdminData] = useState(null);
  const [bioData, setBioData] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const fetchData = async () => {
    try {
      const [doctorResponse, bioResponse] = await Promise.all([
        axios.get(`http://localhost:8088/api/v1/admin/${userId}`),
        axios.get(`http://localhost:8088/api/v1/admin/bio/${userId}`)
      ]);
      setAdminData(doctorResponse.data);
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
          {adminData && bioData && (
            <ProfileBioTop
              id={userId}
              name={adminData.first_name}
              age={bioData.age}
              gender={bioData.gender}
              height={bioData.height}
              weight={bioData.weight}
              bloodgrp={bioData.bloodGroup}
              type= "Admin"
            />
          )}
        </div>
        <div className="row">
          <div className="col-6">
            {adminData && bioData && (
              <div className="LeftFormContainDiv">
                <BioFormLeft
                  userId={userId}
                  firstname={adminData.first_name}
                  lastname={adminData.last_name}
                  Nic={bioData.nic}
                  email={adminData.email}
                  cntcNo={bioData.phoneNo}
                  onUpdate={fetchData}
                  apiUserLink="http://localhost:8088/api/v1/admin"
                  apiUserBioLink="http://localhost:8088/api/v1/admin/bio"
                />
              </div>
            )}
          </div>
          <div className="col-6">
            <div className="row">
            {adminData && (
              <div className="RightFormContainDiv">
                <CredentialFormRight
                userId={userId}
                username={adminData.username}
                password={adminData.password}
                email={adminData.email}
                onUpdate2={fetchData}
                credentialSaveApi={"http://localhost:8088/api/v1/admin"}
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
                  userId={userId}
                  apiDeleteLink = {"http://localhost:8088/api/v1/admin"}
                  navigationAfterDeleteLink ={'http://localhost:3000/listAllAdmins'}
                  />
            </div>
            
          </div>          
        </div>
      </div>
    </AdminLayout>
  )
}

export default ShowAdminProfilePage
