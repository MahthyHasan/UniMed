import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Table, Alert } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../Css/Pharmacist/DashBoard/Employee.css";

const MediDrugs = () => {
  const [drugs, setDrugs] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  // Fetch all drugs on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8088/api/v1/drug/getAll")
      .then((response) => setDrugs(response.data))
      .catch((error) => console.error("Error fetching drugs:", error));
  }, []);

  const handleAdd = (newDrug) => {
    axios
      .post("http://localhost:8088/api/v1/drug/save", newDrug)
      .then((response) => {
        setDrugs([...drugs, { ...newDrug, _id: response.data }]);
        setShowAddModal(false);
        showAlert("Drug added successfully!", "success");
      })
      .catch((error) => {
        console.error("Error adding drug:", error);
        showAlert("Failed to add drug.", "danger");
      });
  };

  const handleEdit = (updatedDrug) => {
    axios
      .put(
        `http://localhost:8088/api/v1/drug/edit/${updatedDrug._id}`,
        updatedDrug
      )
      .then((response) => {
        setDrugs(
          drugs.map((drug) =>
            drug._id === updatedDrug._id ? updatedDrug : drug
          )
        );
        setShowEditModal(false);
        console.log("Drug updated successfully!", "success");
      })
      .catch((error) => {
        console.error("Error editing drug:", error);
        showAlert("Failed to update drug.", "danger");
      });
  };

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:8088/api/v1/drug/delete/${_id}`)
      .then(() => {
        setDrugs(drugs.filter((drug) => drug._id !== _id));
        setShowDeleteModal(false);
        showAlert("Drug deleted successfully!", "success");
      })
      .catch((error) => {
        console.error("Error deleting drug:", error);
        showAlert("Failed to delete drug.", "danger");
      });
  };

  const showAlert = (message, variant) => {
    setAlert({ show: true, message, variant });
    setTimeout(() => setAlert({ show: false, message: "", variant: "" }), 3000);
  };

  return (
    <div className="container-xl">
      {alert.show && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ show: false, message: "", variant: "" })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Drug Inventory</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Button variant="success" onClick={() => setShowAddModal(true)}>
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add Drug</span>
                </Button>
              </div>
            </div>
          </div>
          <Table striped hover>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Drug ID</th>
                <th>Standard Drug ID</th>
                <th>Name</th>
                <th>Dose Form</th>
                <th>Dose Strength</th>
                <th>Quantity</th>
                <th>Manufacturer</th>
                <th>Expiry Date</th>
                <th>Availability Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug) => (
                <tr key={drug._id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{drug._id}</td>
                  <td>{drug.srid}</td>
                  <td>{drug.drug_name}</td>
                  <td>{drug.dosage_forms}</td>
                  <td>{drug.strength}</td>
                  <td>{drug.quantity}</td>
                  <td>{drug.manufacturer}</td>
                  <td>{drug.exp_date}</td>
                  <td>{drug.availability_status}</td>
                  <td>
                    <a
                      href="#editDrugModal"
                      className="edit"
                      onClick={() => {
                        setSelectedDrug(drug);
                        setShowEditModal(true);
                      }}
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteDrugModal"
                      className="delete"
                      onClick={() => {
                        setSelectedDrug(drug);
                        setShowDeleteModal(true);
                      }}
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <AddDrugsModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onAdd={handleAdd}
      />
      <EditDrugsModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        drug={selectedDrug}
        onEdit={handleEdit}
      />
      <DeleteDrugsModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        drug={selectedDrug}
        onDelete={handleDelete}
      />
    </div>
  );
};

const AddDrugsModal = ({ show, onHide, onAdd }) => {
  const [drug, setDrug] = useState({
    srid: "",
    drug_name: "",
    dosage_forms: "",
    strength: "",
    quantity: "",
    manufacturer: "",
    exp_date: "",
    availability_status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrug({ ...drug, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(drug);
    setDrug({
      srid: "",
      drug_name: "",
      dosage_forms: "",
      strength: "",
      quantity: "",
      manufacturer: "",
      exp_date: "",
      availability_status: "",
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1
            style={{
              color: "#5d13e7",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
            }}
          >
            Add Drugs
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="drug-form">
          <Form.Group>
            <Form.Label>Standard Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="srid"
              value={drug.srid}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="drug_name"
              value={drug.drug_name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="dosage_forms"
              value={drug.dosage_forms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Strength</Form.Label>
            <Form.Control
              type="text"
              name="strength"
              value={drug.strength}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={drug.quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              name="manufacturer"
              value={drug.manufacturer}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              name="exp_date"
              value={drug.exp_date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Availability Status</Form.Label>
            <Form.Control
              type="text"
              name="availability_status"
              value={drug.availability_status}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" className="btn btn-success">
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const EditDrugsModal = ({ show, onHide, drug, onEdit }) => {
  const [editedDrug, setEditedDrug] = useState({ ...drug });

  useEffect(() => {
    if (drug) {
      setEditedDrug({ ...drug });
    }
  }, [drug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDrug({ ...editedDrug, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(editedDrug);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1
            style={{
              color: "#5d13e7",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
            }}
          >
            Edit Drugs
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="drug-form">
          <Form.Group>
            <Form.Label>Standard Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="srid"
              value={editedDrug.srid}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="drug_name"
              value={editedDrug.drug_name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="dosage_forms"
              value={editedDrug.dosage_forms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Strength</Form.Label>
            <Form.Control
              type="text"
              name="strength"
              value={editedDrug.strength}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={editedDrug.quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              name="manufacturer"
              value={editedDrug.manufacturer}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              name="exp_date"
              value={editedDrug.exp_date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Availability Status</Form.Label>
            <Form.Control
              type="text"
              name="availability_status"
              value={editedDrug.availability_status}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const DeleteDrugsModal = ({ show, onHide, drug, onDelete }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1
            style={{
              color: "#5d13e7",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
            }}
          >
            Delete Drugs
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "inherit",
            fontSize: "40px",
          }}
        >
          Are you sure you want to delete this drug?
        </h4>
        <h2>
          <strong>{drug?.drug_name}</strong>
        </h2>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            onClick={onHide}
            style={{ marginRight: "10px" }}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={() => onDelete(drug._id)}>
            Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MediDrugs;
