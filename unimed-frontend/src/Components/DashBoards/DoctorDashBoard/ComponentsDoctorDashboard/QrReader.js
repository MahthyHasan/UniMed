import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Button } from 'react-bootstrap';

function QrReader() {
    const [data, setData] = useState('No result');
  const [scanning, setScanning] = useState(false);

  const handleScan = (result) => {
    if (result?.text) {
      setData(result.text);
      setScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const startScanning = () => {
    setData('No result');
    setScanning(true);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', width: '30%', justifyContent: 'center' }}>
      <h1>QR Code Scanner</h1>
      {scanning ? (
        <>
          <QrReader
            onResult={handleScan}
            onError={handleError}
            constraints={{ facingMode: 'environment' }}
            style={{ width: '200px', margin: '0 auto' }}
          />
          <Button onClick={stopScanning} className='btn btn-danger'>Stop Scanning</Button>          
        </>
      ) : (        
        <Button onClick={startScanning} className='btn btn-success'>Start Scanning</Button>
      )}
      <p>{data}</p>
    </div>
  )
}

export default QrReader
