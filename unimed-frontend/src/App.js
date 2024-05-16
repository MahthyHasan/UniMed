import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateAccount from "./Components/Pages/CreateAccount";
import Login from "./Components/Pages/LogIn";
import Home from "./Components/Pages/Home";
import ProjectSetting from "./Components/Pages/ProjectSetting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ps" element={<ProjectSetting />}/>
      </Routes>
    </div>
  );
}

export default App;
