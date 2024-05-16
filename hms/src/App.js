import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateAccount from "./Components/Pages/CreateAccount";
import Login from "./Components/Pages/LogIn";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/caccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
