import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../layout/Layout";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function DrugsDoctorPage() {
  const [drugs, setDrugs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  useEffect(() => {
    // Fetch the drugs data from the backend
    axios.get("http://localhost:8088/api/v1/drug/getAll")
      .then(response => {
        setDrugs(response.data);
        setFilteredDrugs(response.data); // Initialize filtered drugs with all drugs
      })
      .catch(error => {
        console.error("There was an error fetching the drugs data!", error);
      });
  }, []);

  useEffect(() => {
    // Filter drugs based on search term
    const filtered = drugs.filter(drug =>
      drug.drug_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDrugs(filtered);
  }, [search, drugs]);

  return (
    <Layout>
      <div>
        <Form>
          <InputGroup className='my-3'>
            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search drugs by name'
            />
          </InputGroup>
        </Form>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Strength</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrugs.map((drug, index) => (
              <tr key={drug._id}>
                <th scope="row">{index + 1}</th>
                <td>{drug.drug_name}</td>
                <td>{drug.dosage_forms}</td>
                <td>{drug.strength}</td>
                <td>{drug.manufacturer}</td>
                <td>{drug.availability_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default DrugsDoctorPage;
