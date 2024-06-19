import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import ProfileBioTop from "../../../ComponenetsAdminDashboard/ProfileBioTop";
import "./showPharmacistProfilePage.css";
import { useParams } from "react-router-dom";
import BioFormLeft from "../../../ComponenetsAdminDashboard/BioFormLeft";
import CredentialFormRight from "../../../ComponenetsAdminDashboard/CredentialFormRight";
import { Button } from "react-bootstrap";
import deleteIcon from "../../../../../../assets/icons2/delete-3-svgrepo-com.svg";
import DeleteProfileConfirmation from "../../../ComponenetsAdminDashboard/DeleteProfileConfirmation";

function ShowPharmacistProfilePage() {
    const { userId } = useParams();
    const [pharmacistData, setpharmacistData] = useState(null);
    const [bioData, setBioData] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);
    const fetchData = async () => {
      try {
        const [doctorResponse, bioResponse] = await Promise.all([
          axios.get(`http://localhost:8088/api/v1/pharmacist/${userId}`),
          axios.get(`http://localhost:8088/api/v1/pharmacist/bio/${userId}`)
        ]);
        setpharmacistData(doctorResponse.data);
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
          {pharmacistData && bioData && (
            <ProfileBioTop
              id={userId}
              name={pharmacistData.first_name}
              age={bioData.age}
              gender={bioData.gender}
              height={bioData.height}
              weight={bioData.weight}
              bloodgrp={bioData.bloodGroup}
              type= "Pharmacist"
            />
          )}
        </div>
        <div className="row">
          <div className="col-6">
            {pharmacistData && bioData && (
              <div className="LeftFormContainDiv">
                <BioFormLeft
                  userId={userId}
                  firstname={pharmacistData.first_name}
                  lastname={pharmacistData.last_name}
                  Nic={bioData.nic}
                  email={pharmacistData.email}
                  cntcNo={bioData.phoneNo}
                  onUpdate={fetchData}
                  apiUserLink="http://localhost:8088/api/v1/pharmacist"
                  apiUserBioLink="http://localhost:8088/api/v1/pharmacist/bio"
                />
              </div>
            )}
          </div>
          <div className="col-6">
            <div className="row">
            {pharmacistData && (
              <div className="RightFormContainDiv">
                <CredentialFormRight
                userId={userId}
                username={pharmacistData.username}
                password={pharmacistData.password}
                email={pharmacistData.email}
                onUpdate2={fetchData}
                credentialSaveApi={"http://localhost:8088/api/v1/pharmacist"}
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
                  apiDeleteLink = {"http://localhost:8088/api/v1/pharmacist"}
                  navigationAfterDeleteLink ={'http://localhost:3000/listAllPharmacist'}
                  />
            </div>
            
          </div>          
        </div>
      </div>
    </AdminLayout>
  )
}

export default ShowPharmacistProfilePage
