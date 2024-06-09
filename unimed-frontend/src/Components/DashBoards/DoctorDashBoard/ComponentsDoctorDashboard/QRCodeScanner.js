import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./qrCodeScanner.css";

const QRCodeScanner = () => {
	const [data, setData] = useState("No result");
	const [scanning, setScanning] = useState(true);

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
		setData("No result");
		setScanning(true);
	};

	const stopScanning = () => {
		setScanning(false);
	};

	return (
		<div className="qrCodeScanner col">
            <div>
            <p className="qrCodeScannerIntroduction" >Please place The Qr Code inside the camera range.</p>
            </div>			
            <div className="qrCodeReader row">
            {scanning ? (
				<>
                    
					<QrReader
                        className="ScanerPart"
						onResult={handleScan}
						onError={handleError}
						constraints={{ facingMode: "environment" }}                        						
					/>
					<button onClick={stopScanning} className="btn btn-danger">
						Stop Scanning
					</button>
				</>
			) : (
				<button onClick={startScanning} className="btn btn-success">
					Start Scanning
				</button>
			)}
            </div>
            <div className="qrCodeResuts row">
            <p>{data}</p>
            </div>			
			
		</div>
	);
};

export default QRCodeScanner;
