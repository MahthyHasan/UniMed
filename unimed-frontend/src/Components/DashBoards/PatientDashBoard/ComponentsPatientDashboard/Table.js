import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../Css/Patient/Table.css";
import details from "../../../../assets/icons2/details.svg";
import Modal from "./Modal";


const Table = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    // Retrieve the patientId from localStorage
    const storedPatientId = localStorage.getItem("patientId");

    // Ensure the patientId is not null or empty before making the API call
    if (storedPatientId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8088/api/v1/medicalRecords/all/${storedPatientId}`
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching medical records", error);
        }
      };

      fetchData();
    } else {
      console.error("No patient ID found in localStorage.");
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleDetailsClick = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Record ID</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>

          {data.map((row, index) => (
            <tr key={index}>
              <td>{row._id}</td> {/* Adjust this to match the record ID field in your DB */}
              <td>{row.date}</td>
              <td>
                <button className="details-btn" onClick={() => handleDetailsClick(row)}>
                  <img src={details} alt="details icon" className="details-icon" />
                  Details
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedRecord && <Modal show={showModal} onClose={() => setShowModal(false)} record={selectedRecord} />}
    </>
  );
};

export default Table;
