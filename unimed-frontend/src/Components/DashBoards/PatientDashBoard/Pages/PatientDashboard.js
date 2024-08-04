import React, { useEffect, useState } from 'react';
import Personal_Info from '../ComponentsPatientDashboard/Personal_Info';
import Layout from '../../layout/PatientLayout/PatientLayout';
import DocAvailability from '../ComponentsPatientDashboard/DocAvailability';
import '../../../../Css/Patient/PatientDashboard.css';
import Card from '../ComponentsPatientDashboard/Card';
import bgimg from "../../../../assets/icons2/bgimg.jpg";
import AppointmentForm from '../ComponentsPatientDashboard/AppointmentForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

export default function PatientDashboard() {
  const [username, setUsername] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [userBio, setUserBio] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

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

  const handleBookAppointmentClick = () => {
    setShowAppointmentForm(true);
  };

  const handleCloseModal = () => {
    setShowAppointmentForm(false);
  };

  const handleAppointmentSubmit = (appointmentData) => {
    console.log("Appointment Data:", appointmentData);
    // Submit the appointment data to your API or handle it as needed
    handleCloseModal();
  };

  return (
    <div style={{ 
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
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
                    <button onClick={handleBookAppointmentClick} className="btn btn-primary">
                      Book an Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      {showAppointmentForm && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book an Appointment</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ggcgcgcgcgcgcgcg
                <AppointmentForm onSubmit={handleAppointmentSubmit} onCancel={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
