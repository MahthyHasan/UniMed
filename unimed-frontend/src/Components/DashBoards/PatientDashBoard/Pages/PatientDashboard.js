import React, { useEffect, useState } from 'react';
import Personal_Info from '../ComponentsPatientDashboard/Personal_Info';
import Layout from '../../layout/PatientLayout/PatientLayout';
import DocAvailability from '../ComponentsPatientDashboard/DocAvailability';
import DayScheduleButton from '../ComponentsPatientDashboard/DayScheduleButton';
import QRGenerator from '../ComponentsPatientDashboard/QR';
import '../../../../Css/Patient/PatientDashboard.css';

export default function PatientDashboard() {
  const [username, setUsername] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [userBio, setUserBio] = useState(null);

  const userID = localStorage.getItem("user_Id");

  useEffect(() => {
    const fetchUserBio = async () => {
      try {
        const response = await fetch(`http://localhost:8088/api/v1/user/bio/${userID}`);
        if (response.ok) {
          const data = await response.json();
          setUserBio(data);          
        } else {
          console.error("User Bio not found");
        }
      } catch (error) {
        console.error("Error fetching user bio:", error);
      }
    };

    fetchUserBio();
  }, [userID]);


  const handleAddAppointment = (startTime, endTime, name, phone) => {
    // Add logic to handle adding an appointment
  };

  const handleViewAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <div>
      <Layout>
        <h1>{username}</h1>
        <div className="container">
        <div className='row'>
          <div className='col-4'>
          <div className="card">
                <DocAvailability doctorName="Dr. John Doe" isAvailable={true} />
              </div>
          </div>
          <div className='col-4'>
          <div className="card">
                <DayScheduleButton />
              </div>
          </div>
          <div className='col-4'>
          </div>
        </div>
          <div className="row">
            <div className="col-md-6">
            {userBio && <Personal_Info userBio={userBio} />}
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="qr-container">
                <QRGenerator />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
