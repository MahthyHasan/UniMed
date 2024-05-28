import React from "react";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import ProfileBioTop from "../../ComponenetsAdminDashboard/ProfileBioTop";
import "./showDoctorProfilePage.css";

function ShowDoctorProfilePage() {
  return (
    <AdminLayout>
      <div className="show-doctor-profile-page">
        <ProfileBioTop  />
      </div>
    </AdminLayout>
  );
}

export default ShowDoctorProfilePage;
