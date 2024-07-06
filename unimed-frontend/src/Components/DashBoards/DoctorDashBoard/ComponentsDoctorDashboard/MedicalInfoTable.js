import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) => (props.header ? "#F0FFFF" : "#fff")};
  font-weight: ${(props) => (props.header ? "bold" : "normal")};
  color: ${(props) => (props.header ? "#2c3e50" : "#000")};
`;

const MedicalInfoTable = ({Date, Time,Symptoms,Diagnosis,Doctor }) => {
  return (
    <Table>
      <TableRow>
        <TableCell header>Date</TableCell>
        <TableCell>{Date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Time</TableCell>
        <TableCell>{Time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Symptoms</TableCell>
        <TableCell>{Symptoms}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Diagnosis</TableCell>
        <TableCell>{Diagnosis}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Diagnosis Done by</TableCell>
        <TableCell>{Doctor}</TableCell>
      </TableRow>
    </Table>
  );
};

export default MedicalInfoTable;
