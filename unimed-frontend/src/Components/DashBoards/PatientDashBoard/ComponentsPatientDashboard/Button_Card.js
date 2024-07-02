import React from 'react';
import  "../../../../Css/Patient/Buttton_Card.css"; 
import Form from './Form';

const Card = ({ onClose }) => {
    return (
      <div className="card">
        <button type="button" className="dismiss" onClick={onClose}>
          ×
        </button>
        <div className="header">
          <div className="content">
            {/* Replace with Form component */}
            <Form />
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;