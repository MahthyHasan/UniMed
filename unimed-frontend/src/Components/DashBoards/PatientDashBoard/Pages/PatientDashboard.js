import React, { useEffect, useState } from "react";

import Personal_Info from "../ComponentsPatientDashboard/Personal_Info"; 
import Layout from "../../layout/PatientLayout/PatientLayout";
import DocAvailability from "../ComponentsPatientDashboard/DocAvailability";
import DayScheduleButton from "../ComponentsPatientDashboard/DayScheduleButton";
import GenerateQRCode from "../../DoctorDashBoard/ComponentsDoctorDashboard/GenerateQRCode";
export default function PatientDashboard() {
  const [username, setUsername] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const studentInfo = {
    name: "M.J.M.M Hasan",
    id: "UWU/CST/20/109",
    age: "25",
    gender: "Male",
    height: "160cm",
    weight: "65kg",
    bloodgrp: "O+",
    bmi: "12"
  };
  

  return (
    <div>

      <Layout>
        <h1>{username}</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Personal_Info {...studentInfo} />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
              <DocAvailability doctorName="Dr. John Doe" isAvailable={true} />
              <DayScheduleButton />
              {/* <GenerateQRCode /> */}
            </div>
          </div>
        </div>
      </Layout>

    </div>
  );
}
