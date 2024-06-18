import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import "../../../../Css/Pharmacist/DashBoard/Employee.css";

export default function Medicine() {
  const initialState = {
    patientId: "",
    name: "",
    nameofmedicine: "",
    doseStrength: "",
    dosagepermeal: "",
    NoOfmealperday: "",
    NoOfday: "",
  };

  const [exampleState, setExampleState] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [Medicine, setMedicine] = useState([
    {
      patientId: "1",
      name: "Tharushi Vithanage",
      nameofmedicine: "Panadol",
      doseStrength: "20mg",
      dosagepermeal: "2",
      NoOfmealperday: "2",
      NoOfday: "7",
    },
    {
      patientId: "2",
      name: "Jane Doe",
      nameofmedicine: "Ibuprofen",
      doseStrength: "200mg",
      dosagepermeal: "1",
      NoOfmealperday: "3",
      NoOfday: "5",
    },
    {
      patientId: "3",
      name: "John Smith",
      nameofmedicine: "Aspirin",
      doseStrength: "100mg",
      dosagepermeal: "1",
      NoOfmealperday: "2",
      NoOfday: "10",
    },
  ]);

  const handleAddModalShow = () => setShowAddModal(true);

  const handleModalClose = () => {
    setShowAddModal(false);
    setShowDeleteModal(false);
    setFormData(initialState);
  };

  return (
    <div className="container">
      <div className="container-xl">
        <Modal show={showAddModal} onHide={handleModalClose}>
          {/* Add Modal content here */}
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Name Of Medicine</th>
              <th>Dose Strength</th>
              <th>Dosage per Meal</th>
              <th>No Of Mealperday</th>
              <th>No Of day</th>
            </tr>
          </thead>
          <tbody>
            {Medicine.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.patientId}</td>
                <td>{medicine.name}</td>
                <td>{medicine.nameofmedicine}</td>
                <td>{medicine.doseStrength}</td>
                <td>{medicine.dosagepermeal}</td>
                <td>{medicine.NoOfmealperday}</td>
                <td>{medicine.NoOfday}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="issue-button-container">
          <Button variant="primary" onClick={handleAddModalShow}>
            Issue Medicine
          </Button>
        </div>
      </div>
    </div>
  );
}
