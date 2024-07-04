import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/Pages/CreateAccount";
import ProjectSetting from "./Components/Pages/ProjectSetting";
import Doctordashboard from "./Components/DashBoards/DoctorDashBoard/Pages/Doctordashboard";
import PharmacistDashboard from "./Components/DashBoards/PharmacistDashBoard/Pages/PharmacistDashboard";
import PatientDashboard from "./Components/DashBoards/PatientDashBoard/Pages/PatientDashboard";
import Appointment from "./Components/DashBoards/PatientDashBoard/Pages/Appointment";
import Feedback from "./Components/DashBoards/PatientDashBoard/Pages/Feedback";
import Button from "./Components/DashBoards/PatientDashBoard/ComponentsPatientDashboard/Button";
import Form from "./Components/DashBoards/PatientDashBoard/ComponentsPatientDashboard/Form";
import Myrecords from "./Components/DashBoards/PatientDashBoard/Pages/Myrecords";
import ProvideMedicine from "./Components/DashBoards/PharmacistDashBoard/Pages/ProvideMedicine";
import DrugInventory from "./Components/DashBoards/PharmacistDashBoard/Pages/DrugInventory";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LandingPage from "./Components/Pages/Home/LandingPage";
import LoginCategory from "./Components/Pages/Home/LoginTypes/LoginCategory";
import DoctorLogin from "./Components/Login/Doctor/DoctorLogin";
import AdminLogin from "./Components/Login/Admin/AdminLogin";
import UserLogin from "./Components/Login/User/UserLogin";
import PharmacistLogin from "./Components/Login/Pharmacist/PharmacistLogin";
import DrugsDoctorPage from "./Components/DashBoards/DoctorDashBoard/Pages/DrugsDoctorPage";
import AboutUs from "./Components/Pages/Home/AbotUs";
import ContactUs from "./Components/Pages/Home/ContactUs";
import Services from "./Components/Pages/Home/Services";
import Members from "./Components/Pages/Home/Members";
import VerifyEmail from "./Components/Pages/VerifyEmail";
import Mali from "./Components/DashBoards/PharmacistDashBoard/Pages/Mali";
import ClinicRecords from "./Components/DashBoards/DoctorDashBoard/Pages/ClinicRecords";
import Prescription from "./Components/DashBoards/DoctorDashBoard/Pages/Prescription";
import DoctorDrugFinder from "./Components/Pages/DoctorDrugFinder";
import SelectUserAdminPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/SelectUserAdminPage";
import ListAllDoctorsPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Doctor/ListAllDoctorsPage";
import ShowDoctorProfilePage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Doctor/ShowDoctorProfilePage";
import ListAllPharmacistPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Pharmacist/ListAllPharmacistPage";
import ShowPharmacistProfilePage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Pharmacist/ShowPharmacistProfilePage";
import ListAllAdminsPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Admin/ListAllAdminsPage";
import ShowAdminProfilePage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Admin/ShowAdminProfilePage";
import ListAllPatientsPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Patient/ListAllPatientsPage";
import ShowPatientProfile from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Patient/ShowPatientProfile";
import GenerateQRCode from "./Components/DashBoards/DoctorDashBoard/ComponentsDoctorDashboard/GenerateQRCode";
import QRCodeScanner from "./Components/DashBoards/DoctorDashBoard/ComponentsDoctorDashboard/QRCodeScanner";
import PatientClinicProfile from "./Components/DashBoards/DoctorDashBoard/Pages/PatientClinicProfile";
import LoginPageUser from "./Components/Pages/Home/OtherPages/LoginPageUser";
import PatientLayout from "./Components/DashBoards/layout/PatientLayout/PatientLayout";
import Personal_Info from "./Components/DashBoards/PatientDashBoard/ComponentsPatientDashboard/Personal_Info";
import CommonLogin from "./Components/Login/CommonLogin/CommonLogin";
import Privacy from "./Components/Pages/Home/Privacy";
import PersonalDetails from "./Components/DashBoards/PatientDashBoard/ComponentsPatientDashboard/PersonalDetails";
import TermsOfService from "./Components/Pages/Home/TermsOfService";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/ps" element={<ProjectSetting />} />
        <Route path="/doctorDashboard" element={<Doctordashboard />} />
        <Route path="/pharmacyDashboard" element={<PharmacistDashboard />} />
        <Route path="/Myrecords" element={<Myrecords />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/DrugInventory" element={<DrugInventory />} />
        <Route path="/Mali" element={<Mali />} />
        <Route path="/provideMedicine" element={<ProvideMedicine />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/logincat" element={<LoginCategory />} />
        <Route path="/loginDoctor" element={<DoctorLogin />} />
        <Route path="/loginAdmin" element={<AdminLogin />} />
        <Route path="/loginUser" element={<UserLogin />} />
        <Route path="/loginPharmacist" element={<PharmacistLogin />} />
        <Route path="/DrugsDoctorPage" element={<DrugsDoctorPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/ClinicRecords" element={<ClinicRecords />} />
        <Route path="/Prescription" element={<Prescription />} />
        <Route path="/DrugFinder" element={<DoctorDrugFinder />} />
        <Route path="/adminSelectUser" element={<SelectUserAdminPage />} />
        <Route path="/listAllDoctors" element={<ListAllDoctorsPage />} />

        <Route
          path="/showDoctorProfilePage/:userId"
          element={<ShowDoctorProfilePage />}
        />

        <Route path="/listAllPharmacist" element={<ListAllPharmacistPage />} />
        <Route
          path="/showPharmacistProfilePage/:userId"
          element={<ShowPharmacistProfilePage />}
        />
        <Route path="/listAllAdmins" element={<ListAllAdminsPage />} />
        <Route
          path="/showAdminProfilePage/:userId"
          element={<ShowAdminProfilePage />}
        />
        <Route path="/listAllPatients" element={<ListAllPatientsPage />} />
        <Route
          path="/showPatientProfilePage/:userId"
          element={<ShowPatientProfile />}
        />
        <Route path="/testqr" element={<GenerateQRCode />} />
        <Route path="/testqr2" element={<QRCodeScanner />} />
        <Route
          path="/patientClinicProfile/:userId"
          element={<PatientClinicProfile />}
        />
        <Route path="/LoginUserPageNew" element={<LoginPageUser />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/loginDoctor" element={<DoctorLogin />} />
        <Route path="/CommonLogin" element={<CommonLogin />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;
