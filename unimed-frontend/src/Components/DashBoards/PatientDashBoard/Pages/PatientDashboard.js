// import React, { useEffect, useState } from "react";
// import Personal_Info from "../ComponentsPatientDashboard/Personal_Info"; 
// import Layout from "../../layout/PatientLayout/PatientLayout";
// import Card from '../ComponentsPatientDashboard/Card';
// import Button from "../ComponentsPatientDashboard/Button";
// import DocAvailability from "../ComponentsPatientDashboard/DocAvailability";
// import AddAppointment from "../ComponentsPatientDashboard/AddAppointment"; // Import AddAppointment
// import ViewAppointment from "../ComponentsPatientDashboard/ViewAppointment"; // Import ViewAppointment
// import AppointmentList from "../ComponentsPatientDashboard/AppointmentList"; // Import AppointmentList

// export default function PatientDashboard() {
//   const [username, setUsername] = useState("");
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   useEffect(() => {
//     // Retrieve the username from localStorage
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const studentInfo = {
//     name: "M.J.M.M Hasan",
//     id: "UWU/CST/20/109",
//     age: "25",
//     gender: "Male",
//     height: "160cm",
//     weight: "65kg",
//     bloodgrp: "O+",
//     bmi: "12"
//   };

//   const handleAddAppointment = (startTime, endTime, name, phone) => {
//     // Add logic to handle adding an appointment
//     // This can dispatch an action or update state
//   };

//   const handleViewAppointment = (appointment) => {
//     setSelectedAppointment(appointment);
//   };

//   return (
//     <div>
//       <Layout>
//         <h1>{username}</h1> 
//         <Personal_Info {...studentInfo} />
//         <br /><br /><br />
//         {/* <AppointmentList onViewAppointment={handleViewAppointment} /> */}
//         <br /><br /><br />
//         {/* <Button /> */}
//         <br /><br /><br />
//         <DocAvailability doctorName="Dr. John Doe" isAvailable={true} /> 
//          {/* <AddAppointment onAddAppointment={handleAddAppointment} />  */}
//         {/* <ViewAppointment appointment={selectedAppointment} />   */}
//       </Layout> 
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Personal_Info from "../ComponentsPatientDashboard/Personal_Info"; 
import Layout from "../../layout/PatientLayout/PatientLayout";
import DocAvailability from "../ComponentsPatientDashboard/DocAvailability";

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

  const handleAddAppointment = (startTime, endTime, name, phone) => {
    // Add logic to handle adding an appointment
  };

  const handleViewAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <div>
      <Layout>

        <h1>{username}</h1> {/* Replace 'Patient Name' with the retrieved username */}
        {/* <PersonalInfo {...studentInfo} /> */}
        <br /><br /><br />
        {/* Appointment Details Card */}
        <Card type="appointment" />
        <br /><br /><br />
        {/* Button Component */}
        {/* <Button /> */}
        <br /><br /><br />
        {/* Doctor Availability Component */}
        <DocAvailability doctorName="Dr. John Doe" isAvailable={true} /> {/* Pass appropriate props */}
        <Personal_Info {...studentInfo} />
        <br />
        <Card />
        <br />
      </Layout>

    </div>
  );
}
