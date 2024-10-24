import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Table, Container, Button } from "react-bootstrap";


const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`;
const PageContainer = styled(Container)`
margin-top: 20px;
padding: 20px;
background-color: #ffffff;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  const [drugs, setDrugs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  useEffect(() => {
    // Fetch the drugs data from the backend
    axios
      .get("http://localhost:8088/api/v1/drug/getAll")
      .then((response) => {
        setDrugs(response.data);
        setFilteredDrugs(response.data); // Initialize filtered drugs with all drugs
      })
      .catch((error) => {
        console.error("There was an error fetching the drugs data!", error);
      });
  }, []);

  useEffect(() => {
    // Filter drugs based on search term
    const filtered = drugs.filter((drug) =>
      drug.drug_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDrugs(filtered);
  }, [searchTerm, drugs]);

  return (
    <Layout>
      <PageContainer>
      <div className="container">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Dosage Forms</th>
              <th scope="col">Strength</th>
              <th scope="col">Quantity</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Expiry Date</th>
              <th scope="col">Availability Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrugs.map((drug, index) => (
              <tr key={drug._id}>
                <th scope="row">{`MED${index + 1}`.padStart(6, "0")}</th>
                <td>{drug.drug_name}</td>
                <td>{drug.dosage_forms}</td>
                <td>{drug.strength}</td>
                <td>{drug.quantity}</td>
                <td>{drug.manufacturer}</td>
                <td>{drug.exp_date}</td>
                <td>{drug.availability_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </PageContainer>      
    </Layout>
  );
}
