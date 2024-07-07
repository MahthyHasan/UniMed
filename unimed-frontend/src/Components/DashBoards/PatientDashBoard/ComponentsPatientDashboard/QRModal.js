import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #f0f8ff; /* AliceBlue background */
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid #4682b4; /* SteelBlue border */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500; /* OrangeRed background */
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6347; /* Tomato background on hover */
  }
`;

const QRModal = ({ show, onClose, imageUrl }) => {
  if (!show) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <div className="qr-code-container">
          <div className="download-text">Click to Download</div>
          <a href={imageUrl} download="qrcode.png">
            <img src={imageUrl} alt="QR Code" className="qr-code-image" style={{ width: '100%', maxWidth: '300px' }} />
          </a>
        </div>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default QRModal;
