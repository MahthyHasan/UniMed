import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/Pages/CreateAccount";


import ProjectSetting from "./Components/Pages/ProjectSetting";

import Doctordashboard from "./Components/DashBoards/DoctorDashBoard/Pages/Doctordashboard";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./Components/Pages/Home/LandingPage";
import LoginCategory from "./Components/Pages/Home/LoginTypes/LoginCategory";
import DoctorLogin from "./Components/Login/Doctor/DoctorLogin";
import AdminLogin from "./Components/Login/Admin/AdminLogin";
import UserLogin from "./Components/Login/User/UserLogin";
import PharmacistLogin from "./Components/Login/Pharmacist/PharmacistLogin";
import DrugsDoctorPage from "./Components/DashBoards/DoctorDashBoard/Pages/DrugsDoctorPage";


function App() {
  return (
    <div>
      <Routes>
     
        <Route path="/signup" element={<CreateAccount />} />        
        <Route path="/ps" element={<ProjectSetting />} />

        <Route path="/doctorDashboard" element={<Doctordashboard />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/logincat" element={<LoginCategory />} />
        
        <Route path="/loginDoctor" element={<DoctorLogin />} />
        <Route path="/loginAdmin" element={<AdminLogin />} />
        <Route path="/loginUser" element={<UserLogin />} />
        <Route path="/loginPharmacist" element={<PharmacistLogin />} />

        <Route path="/DrugsDoctorPage" element={<DrugsDoctorPage />} />
      </Routes>
    </div>
  );
}

export default App;
