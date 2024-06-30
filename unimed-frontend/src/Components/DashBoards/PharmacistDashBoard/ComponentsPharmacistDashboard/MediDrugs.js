import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
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
  const [updatedDrug, setUpdatedDrug] = useState(null);

  // Fetch all drugs on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/drug/getAll")
      .then((response) => setDrugs(response.data))
      .catch((error) => console.error("Error fetching drugs:", error));
  }, []);

  const handleAdd = (newDrug) => {
    axios
      .post("http://localhost:8080/api/v1/drug/save", newDrug)
      .then((response) => {
        setDrugs([...drugs, { ...newDrug, _id: response.data }]);
        setShowAddModal(false);
      })
      .catch((error) => console.error("Error adding drug:", error));
  };
  const handleEdit = (updatedDrug) => {
    axios
      .put(
        `http://localhost:8080/api/v1/drug/edit/${updatedDrug._id}`,
        updatedDrug
      )
      .then((response) => {
        setDrugs(
          drugs.map((drug) =>
            drug._id === updatedDrug._id ? updatedDrug : drug
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => console.error("Error editing drug:", error));
  };

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:8080/api/v1/drug/delete/${_id}`)
      .then(() => {
        setDrugs(drugs.filter((drug) => drug._id !== _id));
        setShowDeleteModal(false);
      })
      .catch((error) => console.error("Error deleting drug:", error));
  };

  return (
    <div className="container-xl">
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
                <th> Standard Drug ID</th>
                <th>Name</th>
                <th>Dose Form</th>
                <th>Dose Strength</th>
                <th>Quantity</th>
                <th>Manufacturer </th>
                <th>Expiry Date</th>
                <th>Avalibilty staus</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drugs) => (
                <tr key={drugs._id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{drugs.drugId}</td>
                  <td>{drugs.srId}</td>
                  <td>{drugs.name}</td>
                  <td>{drugs.doseForm}</td>
                  <td>{drugs.doseStrength}</td>
                  <td>{drugs.quantity}</td>
                  <td>{drugs.manufacturer}</td>
                  <td>{drugs.expiryDate}</td>
                  <td>{drugs.avalibilty_staus}</td>
                  <td>
                    <a
                      href="#editDrugModal"
                      className="edit"
                      onClick={() => {
                        setSelectedDrug(drugs);
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
                        setSelectedDrug(drugs);
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
  const [drugs, setDrugs] = useState({
    _id: "",
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
    setDrugs({ ...drugs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(drugs);
    setDrugs({
      _id: "",
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
            <Form.Label> Standard Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="srid"
              value={drugs.srid}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="drug_name"
              value={drugs.drug_name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="dosage_forms"
              value={drugs.dosage_forms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Strength</Form.Label>
            <Form.Control
              type="text"
              name="strength"
              value={drugs.strength}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={drugs.quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              name="manufacturer"
              value={drugs.manufacturer}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              name="exp_date"
              value={drugs.exp_date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Avalibilty Status</Form.Label>
            <Form.Control
              type="text"
              name="availability_status"
              value={drugs.availability_status}
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

const EditDrugsModal = ({ show, onHide, drugs, onEdit }) => {
  const [updatedDrugs, setUpdatedDrugs] = useState(drugs);

  React.useEffect(() => {
    setUpdatedDrugs(drugs);
  }, [drugs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDrugs({ ...updatedDrugs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(updatedDrugs);
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
        <Form onSubmit={handleSubmit} className="edit-drug-form">
          <Form.Group>
            <Form.Label>Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="_id"
              value={updatedDrugs?._id || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Standard Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="srid"
              value={updatedDrugs?.srid || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="drug_name"
              value={updatedDrugs?.drug_name || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="dosage_forms"
              value={updatedDrugs?.dosage_forms || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Strength</Form.Label>
            <Form.Control
              type="text"
              name="strength"
              value={updatedDrugs?.strength || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              value={updatedDrugs?.quantity || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Manufacturer Date</Form.Label>
            <Form.Control
              type="date"
              name="manufacturer"
              value={updatedDrugs?.manufacturer || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              name="exp_date"
              value={updatedDrugs?.exp_date || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Avalibilty Status</Form.Label>
            <Form.Control
              type="text"
              name=" availability_status"
              value={updatedDrugs?.availability_status || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" className="btn btn-info">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const DeleteDrugsModal = ({ show, onHide, drugs, onDelete }) => {
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
        <h3
          style={{
            color: " rgb(14, 13, 13)",
            fontWeight: "bold",
          }}
        >
          Are you sure you want to delete this Drug?
        </h3>
        <p>
          <strong>{drugs?.name}</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => onDelete(drugs._id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MediDrugs;
