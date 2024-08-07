import React from "react";
import styled from "styled-components";

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) => (props.header ? "#F0FFFF" : "#fff")};
  font-weight: ${(props) => (props.header ? "bold" : "normal")};
  color: ${(props) => (props.header ? "#2c3e50" : "#000")};
`;

const PatientDemographicsTable = ({
  age,
  gender,
  bloodGroup,
  nic,
  regNo,
  firstName
}) => {
  return (
    <Table>
      <tbody>
        <tr>
          <TableCell header>Name</TableCell>
          <TableCell>{firstName}</TableCell>
          <TableCell header>Gender</TableCell>
          <TableCell>{gender}</TableCell>
          <TableCell header>Age</TableCell>
          <TableCell>{age}</TableCell>
        </tr>
        <tr>
          <TableCell header>NIC No</TableCell>
          <TableCell>{nic}</TableCell>
          <TableCell header>Enrollment No</TableCell>
          <TableCell>{regNo}</TableCell>
          <TableCell header>Blood Type</TableCell>
          <TableCell>{bloodGroup}</TableCell>
        </tr>
      </tbody>
    </Table>
  );
};

export default PatientDemographicsTable;
