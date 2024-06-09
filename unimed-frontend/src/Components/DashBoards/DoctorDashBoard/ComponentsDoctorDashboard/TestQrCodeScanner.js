import React, { useState } from "react";
import { Button } from "react-bootstrap";
import QRCode from "qrcode";
import QrScanner from "react-qr-scanner";

function TestQrCodeScanner() {
    const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState("No result");

  const generateQRCodetest = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScan = (result) => {
    if (result) {
      setData(result);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <div>
      <label>Enter Text</label>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
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
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{data}</p>
    </div>
  )
}

export default TestQrCodeScanner
