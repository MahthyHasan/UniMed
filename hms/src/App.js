import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateAccount from "./Components/Pages/CreateAccount";
import Login from "./Components/Pages/LogIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/caccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
