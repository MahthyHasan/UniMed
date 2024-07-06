import React from "react";
import styled from "styled-components";

// Styled components
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
  color: ${(props) =>
    props.header
      ? "#2c3e50"
      : "#000"}; // Example colors: dark cyan for headers, black for normal cells
`;

const AllergiesTable = ({ item1 }) => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableCell header>Allergies</TableCell>
          <TableCell>{item1}</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

// Prop types and default props

export default AllergiesTable;
