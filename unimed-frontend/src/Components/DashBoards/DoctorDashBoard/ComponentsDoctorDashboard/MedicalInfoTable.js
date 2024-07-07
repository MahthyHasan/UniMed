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

const formatSymptomsArray = (data, separator = ', ') => {
  if (data && (Array.isArray(data) || typeof data === 'string')) {
    if (Array.isArray(data)) {
      return data.join(separator);
    } else {
      return data.split(/(?=[A-Z])/).join(separator);
    }
  }
  return '';
};

const MedicalInfoTable = ({date, time, symptoms, diaognises, priscripedMedicines, doctorId }) => {
  return (
    <Table>
      <TableRow>
        <TableCell header>Date</TableCell>
        <TableCell>{date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Time</TableCell>
        <TableCell>{time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Symptoms</TableCell>
        <TableCell>{formatSymptomsArray(symptoms)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Diagnosis</TableCell>
        <TableCell>{diaognises}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Priscribed Medicines</TableCell>
        <TableCell>{priscripedMedicines}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header>Diagnosis Done by</TableCell>
        <TableCell>{doctorId}</TableCell>
      </TableRow>
    </Table>
  );
};

export default MedicalInfoTable;
