import React, { useEffect, useState } from 'react';
import Personal_Info from '../ComponentsPatientDashboard/Personal_Info';
import Layout from '../../layout/PatientLayout/PatientLayout';
import DocAvailability from '../ComponentsPatientDashboard/DocAvailability';
import DayScheduleButton from '../ComponentsPatientDashboard/DayScheduleButton';
import '../../../../Css/Patient/PatientDashboard.css';
import Card from '../ComponentsPatientDashboard/Card';

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

  return (
    <div>
      <Layout>
        <h1>{username}</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {userBio && <Personal_Info userBio={userBio} />}
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <DocAvailability doctorName="Dr. John Doe" isAvailable={true} />
                  </div>
                </div>
                <div className="col-12">
                  <Card />
                </div>
                <div className="col-12">
                  <div className="card">
                    <DayScheduleButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
