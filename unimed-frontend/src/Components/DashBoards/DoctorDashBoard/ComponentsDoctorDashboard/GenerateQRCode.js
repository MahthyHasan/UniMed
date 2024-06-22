import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import QRCode from 'qrcode';
import { QrReader } from 'react-qr-reader';

function GenerateQRCode() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const qrRef = useRef(null);
  const [scanResultFile, setScanResultFile] = useState('');

  const generateQRCodetest = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleErrorFile = (error) => {
    console.log(error);
  };

  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };

  const onScanFile = () => {
    if (qrRef.current) {
      qrRef.current.openImageDialog();
    } else {
      console.error('QrReader reference is null');
    }
  };

  return (
    <div>
      <label>Enter Text</label>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <Button onClick={generateQRCodetest}>Generate QR Code</Button>
      <br />
      <br />
      {imageUrl ? (
        <a href={imageUrl} download>
          <img src={imageUrl} alt="Qrcode" />
        </a>
      ) : null}
      <br />
      <br />
      <Button onClick={onScanFile}>Scan QR Code</Button>
      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: '100%' }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
    </div>
  );
}

export default GenerateQRCode;
