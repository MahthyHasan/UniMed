import React, { useState } from "react";
import Layout from "../DashBoards/layout/DoctorLayout/DoctorLayouts";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";


const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`;

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form>
      <StyledInputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <FormControl
          placeholder="Search For Drugs"
          aria-label="Search for drugs"
          aria-describedby="basic-addon1"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </StyledInputGroup>
    </Form>
  );
};

export default function DoctorDrugFinder() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <div className="container">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Dose Strength</th>
              <th scope="col">Quantity</th>
              <th scope="col">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">MED001</th>
              <td>Amoxeline</td>
              <td>50mg</td>
              <td>3 Boxes</td>
              <td>25/01/2026</td>
            </tr>
            <tr>
              <th scope="row">MED002</th>
              <td>Vitamin C</td>
              <td>50mg</td>
              <td>3 Boxes</td>
              <td>25/05/2025</td>
            </tr>
            <tr>
              <th scope="row">MED003</th>
              <td>Prititon</td>
              <td>50mg</td>
              <td>1 Boxes</td>
              <td>25/05/2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
