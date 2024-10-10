import React, { useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// Styled components for consistent styling
const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`;

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form>
      <StyledInputGroup>
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <FormControl
          placeholder="Medical Request ID"
          aria-label="Medical Request ID"
          aria-describedby="basic-addon1"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </StyledInputGroup>
    </Form>
  );
};

export default function MedicalRequests() {
  const [searchTerm, setSearchTerm] = useState("");

  // Static array of medical request data
  const medicalRequests = [
    {
      requestID: "MRID001",
      date: "25/11/2024",
      studentID: "UWU/CST/20/057",
      name: "K.M.Y Kalhari",
      reason: "To produce to the department",
    },
    {
      requestID: "MRID002",
      date: "26/11/2024",
      studentID: "UWU/CST/20/058",
      name: "N.K. Perera",
      reason: "Medical leave request",
    },
    // Add more records as needed...
  ];

  // Filtering the requests based on the search term
  const filteredRequests = medicalRequests.filter((request) =>
    request.requestID.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProceedClick = (id) => {
    console.log(`Proceed with request ID: ${id}`);
    // Implement your proceed logic here
  };

  return (
    <Layout>
      <div className="container">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Request ID</th>
              <th scope="col">Date</th>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Reason</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.requestID}>
                <td>{request.requestID}</td>
                <td>{request.date}</td>
                <td>{request.studentID}</td>
                <td>{request.name}</td>
                <td>{request.reason}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleProceedClick(request.requestID)}
                  >
                    Proceed
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleProceedClick(request.requestID)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
