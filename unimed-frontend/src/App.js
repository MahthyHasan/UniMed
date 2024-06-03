import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/Pages/CreateAccount";

import ProjectSetting from "./Components/Pages/ProjectSetting";

import Doctordashboard from "./Components/DashBoards/DoctorDashBoard/Pages/Doctordashboard";
import PharmacistDashboard from "./Components/DashBoards/PharmacistDashBoard/Pages/PharmacistDashboard";
import ProvideMedicine from "./Components/DashBoards/PharmacistDashBoard/Pages/ProvideMedicine";
import DrugInvestory from "./Components/DashBoards/PharmacistDashBoard/Pages/DrugInvestory";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./Components/Pages/Home/LandingPage";
import LoginCategory from "./Components/Pages/Home/LoginTypes/LoginCategory";
import DoctorLogin from "./Components/Login/Doctor/DoctorLogin";
import AdminLogin from "./Components/Login/Admin/AdminLogin";
import UserLogin from "./Components/Login/User/UserLogin";
import PharmacistLogin from "./Components/Login/Pharmacist/PharmacistLogin";
import DrugsDoctorPage from "./Components/DashBoards/DoctorDashBoard/Pages/DrugsDoctorPage";
import AboutUs from "./Components/Pages/Home/AbotUs";
import ContactUs from "./Components/Pages/Home/ContactUs";
import VerifyEmail from "./Components/Pages/VerifyEmail";
import SelectUserAdminPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/SelectUserAdminPage";
import ListAllDoctorsPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Doctor/ListAllDoctorsPage";
import ShowDoctorProfilePage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Doctor/ShowDoctorProfilePage";
import ListAllPharmacistPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Pharmacist/ListAllPharmacistPage";
import ShowPharmacistProfilePage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Pharmacist/ShowPharmacistProfilePage";
import ListAllAdminsPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Admin/ListAllAdminsPage";
import ShowAdminProfilePage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Admin/ShowAdminProfilePage";
import ListAllPatientsPage from "./Components/DashBoards/AdminDashBoard/Pages/UserTab/Patient/ListAllPatientsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/ps" element={<ProjectSetting />} />
        <Route path="/doctorDashboard" element={<Doctordashboard />} />
        <Route path="/pharmacyDashboard" element={<PharmacistDashboard />} />
        <Route path="/DrugInvestory" element={<DrugInvestory />} />
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
        <Route path="/verifyEmail" element={<VerifyEmail />} />
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

      </Routes>
    </div>
  );
}

export default App;
