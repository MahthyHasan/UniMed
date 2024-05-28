import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import "../../../../Css/Pharmacist/DashBoard/Drug.css";

const Drug = () => {
  // Define state variables for managing modal visibility and form data
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    drugId: "",
    name: "",
    doseStrength: "",
    quantity: "",
    expiryDate: "",
  });
  const [drugs, setDrugs] = useState([
    // Sample initial drug data
    {
      drugId: "1",
      name: "Drug 1",
      doseStrength: "10mg",
      quantity: "100",
      expiryDate: "2024-12-31",
    },
    {
      drugId: "2",
      name: "Drug 2",
      doseStrength: "20mg",
      quantity: "50",
      expiryDate: "2025-06-30",
    },
  ]);

  // Event handlers for showing/hiding modals and form data management
  const handleAddModalShow = () => setShowAddModal(true);
  const handleDeleteModalShow = (drugId) => {
    setShowDeleteModal(true);
    setFormData({ ...formData, drugId });
  };
  const handleModalClose = () => {
    setShowAddModal(false);
    setShowDeleteModal(false);
    // Reset form data after modal is closed
    setFormData({
      drugId: "",
      name: "",
      doseStrength: "",
      quantity: "",
      expiryDate: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to delete a drug by drug ID
  const handleDeleteDrug = () => {
    const updatedDrugs = drugs.filter(
      (drug) => drug.drugId !== formData.drugId
    );
    setDrugs(updatedDrugs);
    handleModalClose();
  };

  // JSX for modal content
  const modalContent = (
    <Modal show={showDeleteModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Drug</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this drug?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteDrug}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="container-xl">
      {/* Button to add drug */}
      <Button variant="primary" onClick={handleAddModalShow}>
        Add Drug
      </Button>

      {/* Render modal */}
      <Modal show={showAddModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Drug</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDoseStrength">
              <Form.Label>Dose Strength</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter dose strength"
                name="doseStrength"
                value={formData.doseStrength}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formExpiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Table to display drugs */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Drug ID</th>
            <th>Name</th>
            <th>Dose Strength</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug, index) => (
            <tr key={index}>
              <td>{drug.drugId}</td>
              <td>{drug.name}</td>
              <td>{drug.doseStrength}</td>
              <td>{drug.quantity}</td>
              <td>{drug.expiryDate}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteModalShow(drug.drugId)}
                >
                  Delete
                </Button>
                {/* You can add an edit button here to edit drug details */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Render modal for deletion */}
      {modalContent}
    </div>
  );
};

export default Drug;
