import React from 'react';
import "../../../../Css/Patient/Table.css";

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Record ID</th>
          <th>Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.recordId}</td>
            <td>{row.date}</td>
            <td>
              <button className="details-btn">Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;