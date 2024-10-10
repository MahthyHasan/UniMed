import React, { useState } from "react";
import PharmacistLayout from "../../layout/PharmacistLayout/PharmacistLayout";
import Card from "../ComponentsPharmacistDashboard/Card";
import { ScancardQr } from "../ComponentsPharmacistDashboard/ScancardQr";
import QrcodeScannerForBooking from "../ComponentsPharmacistDashboard/QrcodeScannerForBooking";
import QrcodeScannerForMedicine from "../ComponentsPharmacistDashboard/QrcodeScannerForMedicine";
import { ScancardQr2 } from "../ComponentsPharmacistDashboard/ScancardQr2";

function ClinicForPharmacist() {
  const [showMedicineScanner, setShowMedicineScanner] = useState(false);
  const [showBookingScanner, setShowBookingScanner] = useState(false);

  const handleScancardClick = (type) => {
    if (type === "medicine") {
      setShowMedicineScanner(true);
      setShowBookingScanner(false);
    } else if (type === "booking") {
      setShowMedicineScanner(false);
      setShowBookingScanner(true);
    }
  };

  return (
    <PharmacistLayout>
      <div className="container">
        <div className="row justify-content-center">
          <Card />
        </div>
        {!showMedicineScanner && !showBookingScanner ? (
          <div className=" row justify-content-center">
            <div className="col-12 col-md-6">
              <div
                className="p-3"
                onClick={() => handleScancardClick("medicine")}
              >
                <ScancardQr />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="p-3"
                onClick={() => handleScancardClick("booking")}
              >
                <ScancardQr2 />
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            {showMedicineScanner ? (
              <div className="col-12 col-md-6">
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <QrcodeScannerForMedicine
                    setShowQrDiv={() => setShowMedicineScanner(false)}
                  />
                </div>
              </div>
            ) : (
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div>
                  <QrcodeScannerForBooking
                    setShowQrDiv={() => setShowBookingScanner(false)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </PharmacistLayout>
  );
}

export default ClinicForPharmacist;
