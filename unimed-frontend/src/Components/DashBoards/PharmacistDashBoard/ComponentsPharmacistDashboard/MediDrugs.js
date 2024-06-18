import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../Css/Pharmacist/DashBoard/Employee.css";

const MediDrugs = () => {
  const [drugs, setDrugs] = useState([
    {
      drugId: "1",
      srId: "000",
      name: "panadol",
      doseForm: "Tablet",
      doseStrength: "10mg",
      quantity: "100",
      manufacturerDate: "2024-01-31",
      expiryDate: "2024-12-31",
      avalibilty_staus: "yes",
    },
    {
      drugId: "2",
      srId: "001",
      name: "Vitamin C",
      doseForm: "Tablet",
      doseStrength: "10mg",
      quantity: "100",
      manufacturerDate: "2024-10-31",
      expiryDate: "2024-12-31",
      avalibilty_staus: "No",
    },
    {
      drugId: "3",
      srId: "002",
      name: "Ativan",
      doseForm: "Tablet",
      doseStrength: "10mg",
      quantity: "100",
      manufacturerDate: "2024-11-31",
      expiryDate: "2024-12-31",
      avalibilty_staus: "Yes",
    },

    {
      drugId: "4",
      srId: "003",
      name: "Amoxicillin",
      doseForm: "Tablet",
      doseStrength: "10mg",
      quantity: "100",
      manufacturerDate: "2024-11-31",
      expiryDate: "2024-12-31",
      avalibilty_staus: "No",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDrug, setSelectedDrugs] = useState(null);

  const handleAdd = (drugs) => {
    setDrugs([...drugs, { ...drugs, drugId: drugs.length + 1 }]);
  };

  const handleEdit = (updatedDrugs) => {
    setDrugs(
      drugs.map((drugs) =>
        drugs.id === updatedDrugs.id ? updatedDrugs : drugs
      )
    );
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    setDrugs(drugs.filter((emp) => drugs.id !== id));
    setShowDeleteModal(false);
  };

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Drug Investory</b>
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
                <th>Manufacturer Date</th>
                <th>Expiry Date</th>
                <th>Avalibilty staus</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drugs) => (
                <tr key={drugs.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{drugs.drugId}</td>
                  <td>{drugs.srId}</td>
                  <td>{drugs.name}</td>
                  <td>{drugs.doseForm}</td>
                  <td>{drugs.doseStrength}</td>
                  <td>{drugs.quantity}</td>
                  <td>{drugs.manufacturerDate}</td>
                  <td>{drugs.expiryDate}</td>
                  <td>{drugs.avalibilty_staus}</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => {
                        setSelectedDrugs(drugs);
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
                      href="#deleteEmployeeModal"
                      className="delete"
                      onClick={() => {
                        setSelectedDrugs(drugs);
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
    drugId: "",
    srId: "",
    name: "",
    dosedoseForm: "",
    doseStrength: "",
    quantity: "",
    manufacturerDate: "",
    expiryDate: "",
    avalibilty_staus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrugs({ ...drugs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(drugs);
    setDrugs({
      drugId: "",
      srId: "",
      name: "",
      dosedoseForm: "",
      doseStrength: "",
      quantity: "",
      manufacturerDate: "",
      expiryDate: "",
      avalibilty_staus: "",
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
            <Form.Label>Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="drugId"
              value={drugs.drugId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Standard Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="srId"
              value={drugs.srId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={drugs.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="doseForm"
              value={drugs.doseForm}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Strength</Form.Label>
            <Form.Control
              type="text"
              name="doseStrength"
              value={drugs.doseStrength}
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
            <Form.Label>Manufacturer Date</Form.Label>
            <Form.Control
              type="date"
              name="manufacturerDate"
              value={drugs.manufacturerDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              name="expiryDate"
              value={drugs.expiryDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Avalibilty Status</Form.Label>
            <Form.Control
              type="text"
              name="avalibilty_staus"
              value={drugs.avalibilty_staus}
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
              name="drugId"
              value={updatedDrugs?.drugId || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Standard Drugs ID</Form.Label>
            <Form.Control
              type="text"
              name="srId"
              value={updatedDrugs?.srId || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={updatedDrugs?.name || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="doseForm"
              value={updatedDrugs?.doseForm || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dosage Strength</Form.Label>
            <Form.Control
              type="text"
              name="doseStrength"
              value={updatedDrugs?.doseStrength || ""}
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
              name="manufacturerDate"
              value={updatedDrugs?.manufacturerDate || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              name="expiryDate"
              value={updatedDrugs?.expiryDate || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Avalibilty Status</Form.Label>
            <Form.Control
              type="text"
              name="avalibilty_staus"
              value={updatedDrugs?.avalibilty_staus || ""}
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
        <Button variant="danger" onClick={() => onDelete(drugs.id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MediDrugs;
