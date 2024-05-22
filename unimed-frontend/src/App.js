import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateAccount from "./Components/Pages/CreateAccount";
import Login from "./Components/Pages/LogIn";
import Home from "./Components/Pages/Home";
import ProjectSetting from "./Components/Pages/ProjectSetting";
import LandingPage from "./Components/Pages/Home/LandingPage";
import LoginCategory from "./Components/Pages/Home/LoginTypes/LoginCategory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ps" element={<ProjectSetting />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/logincat" element={<LoginCategory />} />
      </Routes>
    </div>
  );
}

export default App;
