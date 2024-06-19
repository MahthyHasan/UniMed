import React, { useState } from 'react';
import "./bioFormLeft.css";
import { Button } from "react-bootstrap";
import axios from 'axios';

function BioFormLeft({ userId, firstname, lastname, Nic, email, cntcNo, onUpdate, apiUserLink, apiUserBioLink }) {
  const [formData, setFormData] = useState({
    firstname,
    lastname,
    Nic,
    email,
    cntcNo
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update Doctor
      await axios.put(`${apiUserLink}/${userId}`, {
        first_name: formData.firstname,
        last_name: formData.lastname,
        email: formData.email
      });

      // Update DoctorBio
      await axios.put(`${apiUserBioLink}/${userId}`, {
        nic: formData.Nic,
        phoneNo: formData.cntcNo
      });

      onUpdate();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className='col-12 bioFormLeft'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <p className='formTitleBioForm'>Bio</p>
        </div>
        <div className='row mt-0'>
          <p className='leftBioFormInputFieldTitle'>First Name</p>
          <input
            className="form-control inputTagForBioDataleft"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <p className='leftBioFormInputFieldTitle'>Last Name</p>
          <input
            className="form-control inputTagForBioDataleft"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <p className='leftBioFormInputFieldTitle'>NIC No</p>
          <input
            className="form-control inputTagForBioDataleft"
            type="text"
            name="Nic"
            value={formData.Nic}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <p className='leftBioFormInputFieldTitle'>Email</p>
          <input
            className="form-control inputTagForBioDataleft"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <p className='leftBioFormInputFieldTitle'>Contact No</p>
          <input
            className="form-control inputTagForBioDataleft"
            type="text"
            name="cntcNo"
            value={formData.cntcNo}
            onChange={handleChange}
          />
        </div>
        <div className='row'>
          <Button className="ButtonForLeftForm" type="submit">
            Save Changes
          </Button>
        </div>
      </form>                
    </div>
  );
}

export default BioFormLeft;
