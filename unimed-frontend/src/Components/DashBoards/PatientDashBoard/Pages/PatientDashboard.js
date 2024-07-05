import React, { useEffect, useState } from "react";
import PersonalInfo from "../ComponentsPatientDashboard/Personal_Info"; 
import Layout from "../../layout/PatientLayout/PatientLayout";
import Card from '../ComponentsPatientDashboard/Card';
import Button from "../ComponentsPatientDashboard/Button";

const PatientDashboard = () => {
  const [username, setUsername] = useState("");
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Example: Fetch appointment data from API or localStorage
    const fetchedAppointment = {
      date: "Wednesday, June 15th",
      time: "11:11 PM"
    };

    // Set the appointment state
    setAppointment(fetchedAppointment);

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
        <h1>{username}</h1> {/* Replace 'Patient Name' with the retrieved username */}
        <PersonalInfo {...studentInfo} />
        <br /><br /><br />
        {/* Appointment Details Card */}
        <Card type="appointment" date={appointment?.date} time={appointment?.time} />
        <br /><br /><br />
        {/* Button Component */}
        <Button />
      </Layout>
    </div>
  );
};

export default PatientDashboard;
