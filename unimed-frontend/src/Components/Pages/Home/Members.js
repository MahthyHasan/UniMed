import React from "react";
import "./Services.css";

import Footer from "./footer.js";
import NavBar from "./navbar.js";
import img1 from "../../../assets/images/doc22.jpg";
import img2 from "../../../assets/images/medical.jpg";
import img3 from "../../../assets/images/nurse.jpg";
import img4 from "../../../assets/images/pharmacist.jpg";

export default function Members() {
  return (
    <div className="member-container">
      <NavBar />

      {/*} Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center ">
            <h6 className="text-primary text-uppercase">Our Staff</h6>
            <h1 className="mb-5 " style={{ color: "#18cdca" }}>
              Our Medical Staff
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={img1}
                    alt=""
                    style={{ width: "300px", height: "400px" }}
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0" style={{ color: "black" }}>
                      Dr.Niluka Weejesinghe
                    </h5>
                    <small style={{ color: "black" }}>Doctor</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={img4}
                    alt=""
                    style={{ width: "300px", height: "400px" }}
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                    <a className="btn btn-square mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="fw-bold mb-0" style={{ color: "black" }}>
                    Mrs. J. H.Fernando
                  </h5>
                  <small style={{ color: "black" }}>Pharmacist</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={img3}
                    alt=""
                    style={{ width: "300px", height: "400px" }}
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                    <a className="btn btn-square mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="fw-bold mb-0" style={{ color: "black" }}>
                    Mr. A. R. Hasanjith
                  </h5>
                  <small style={{ color: "black" }}>Nursing Officer</small>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={img2} alt="" />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                    <a className="btn btn-square mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5 className="fw-bold mb-1" style={{ color: "black" }}>
                    Mr. R.A Saara
                  </h5>
                  <small style={{ color: "black" }}>
                    Health Service Attendant
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End*/}

      <Footer />
    </div>
  );
}
