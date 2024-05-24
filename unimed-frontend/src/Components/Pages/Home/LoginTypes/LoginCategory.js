import React from "react";
import "./loginMiddle.css";
import LoginCards from "./LoginCards";
import backIcon from "../../../../assets/icons2/back-buttons-multimedia-svgrepo-com.svg";

function LoginCategory() {
  return (
    <div className="container2">
      <a href="/" className="back-button">
        <img src={backIcon} alt="Back" />
      </a>
      <h1>Welcome to <span className="sytem-Title">UniMed</span></h1>
      <LoginCards />
    </div>
  );
}

export default LoginCategory;
