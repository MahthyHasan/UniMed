import React from "react";

import "./Services.css";

import Footer from "./footer.js";
import NavBar from "./navbar.js";
import img1 from "../../../assets/images/user1.jpg";
import img2 from "../../../assets/images/user2.jpg";
import img3 from "../../../assets/images/user3.jpg";
import img4 from "../../../assets/images/doc2.jpg";
import background from "../../../assets/images//young-handsome-physician-medical-robe-with-stethoscope.jpg";

export default function Services() {
  return (
    <div className="service-container">
      <NavBar />

      {/*About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={background}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase"> Services </h6>
              <h1 className="mb-4" style={{ fontSize: "2.5rem" }}>
                <span className="text-primary" style={{ color: "#18cdca" }}>
                  Prioritize Your Well-being
                </span>{" "}
                Your Health Matters
              </h1>

              <p
                className="mb-4"
                style={{
                  color: "#74828f",
                  fontSize: "1.3em",
                  lineHeight: "1.5",
                }}
              >
                At Uva Wellassa University of Sri Lanka, we prioritize the
                health and well-being of our students. Our University Medical
                Center, led by the University Medical Officer (UMO), provides
                comprehensive medical care free of charge to all students. With
                the support of a qualified nurse and pharmacist, we ensure that
                our students receive the highest standard of healthcare.
              </p>

              <div className="row g-4 mb-3 pb-3">
                <div>
                  <div className="d-flex">
                    <div className="d-flex align-items-center mt-1">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <span className="fw-bold text-secondary">01</span>
                      </div>
                      <div className="ps-3">
                        <h6
                          className="m-0"
                          style={{
                            color: "#74828f",

                            fontSize: "1.3rem",
                            fontFamily: "inherit",
                          }}
                        >
                          Provision of routine medical consultations
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div className="d-flex align-items-center mt-1">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <span className="fw-bold text-secondary">02</span>
                      </div>
                      <div className="ps-3">
                        <h6
                          className="m-0"
                          style={{
                            color: "#74828f",

                            fontSize: "1.3rem",
                            fontFamily: "inherit",
                          }}
                        >
                          Issuance of certified medical reports
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="d-flex">
                    <div className="d-flex align-items-center mt-1">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <span className="fw-bold text-secondary">03</span>
                      </div>
                      <div className="ps-3">
                        <h6
                          className="m-0"
                          style={{
                            color: "#74828f",

                            fontSize: "1.3rem",
                            fontFamily: "inherit",
                          }}
                        >
                          Management of first aid emergencies for <br />
                          non-critical cases
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href=""
                className="btn py-3 px-5"
                style={{
                  backgroundColor: "#18cdca",
                  color: "white",
                  border: "none",
                }}
              >
                Read More
                <i
                  className="fa fa-arrow-right ms-3"
                  style={{ color: "#18cdca" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*} About End */}

      <Footer />
    </div>
  );
}
