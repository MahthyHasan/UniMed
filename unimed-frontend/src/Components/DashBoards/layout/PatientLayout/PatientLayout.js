import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Dropdown from "react-bootstrap/Dropdown";
import { EditProfile } from "./EditProfile";
import { changeToggle } from "../../../../redux/actions";
import home from "../../../../assets/icons2/home-p.svg";
import SideClose from "../../../../assets/icons/left-arrow.svg";
import Myrecords from "../../../../assets/icons2/Myrecords.svg";
import medcetificate from "../../../../assets/icons2/med-cetificate.svg";
import chat from "../../../../assets/icons2/office-discussion-chat-communication-goup-2-svgrepo-com.svg";
import Profile from "../../../../assets/profile-img.svg";
import logopath from "../../../../assets/logo.png";
import Feedback from "../../PatientDashBoard/Pages/Feedback";
import "./styles.css";

export default function PatientLayout({ children }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const open = useSelector((state) => state.setting.toggle);
  const [modalType, setModalType] = useState("view");
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [user, setUser] = useState(null);
  
  // State to control the disabled state of the "Community Chat" button
  const [isChatDisabled, setIsChatDisabled] = useState(true);

  function toggleDrawer() {
    dispatch(changeToggle(!open));
  }

  const navigate = useNavigate();

  const handlePersonalDetailsClick = () => {
    navigate("/personal-details");
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={
            (!open ? "col-xl-2" : "w-100px") +
            (!show ? " mobile-navbar-hide" : " mobile-show") +
            " col-auto col-md-1 px-0 side-bg-color border-right min-vh-100 trans"
          }
        >
          <div className="row">
            <div className="col">
              <img
                src={logopath}
                className={open ? "hide-logo" : "logo-prm"}
                style={{ height: "45px", width: "auto" }}
              />
            </div>
            <div className="col">
              <div
                className={"close-btn-container mobile-hide"}
                onClick={toggleDrawer}
              >
                <img
                  src={SideClose}
                  alt="SideClose"
                  className={open ? "rotate-180" : ""}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 nav-link-text-color pt-4">
            <div className="w-100 px-sm-2">
              <NavLink
                exact
                to={"/PatientDashboard"}
                className="side-menu-item"
                activeClassName="side-menu-active"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={home}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className="me-2"
                  />
                  {!open && <div className="trans-1">Home</div>}
                </div>
              </NavLink>
            </div>

            <div className="w-100 px-sm-2">
              <NavLink
                exact
                to={"/Myrecords"}
                className="side-menu-item"
                activeClassName="side-menu-active"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={Myrecords}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className="me-2"
                  />
                  {!open && <div>My Records</div>}
                </div>
              </NavLink>
            </div>
            <div className="w-100 px-sm-2">
              <NavLink
                exact
                to={"/Chat"}
                className={`side-menu-item ${isChatDisabled ? "disabled" : ""}`}
                activeClassName="side-menu-active"
                onClick={(e) => isChatDisabled && e.preventDefault()}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={chat}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className="me-2"
                  />
                  {!open && <div>Community Chat</div>}
                </div>
              </NavLink>
            </div>
            <div className="w-100 px-sm-2 log-out-button-in-side-navbar">
              <NavLink
                exact
                to={"/Feedback"}
                className="side-menu-item"
                activeClassName="side-menu-active"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={medcetificate}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className="me-2"
                  />
                  {!open && <div>Feedback</div>}
                </div>
              </NavLink>
            </div>
            <div className="w-100 px-sm-2 log-out-button-in-side-navbar">
              <NavLink
                exact
                to={""}
                className="side-menu-item"
                activeClassName="side-menu-active"
              >
                <div className="d-flex align-items-center">
                  <FeatherIcon
                    icon="log-out"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div>Log-out</div>}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <nav className="navbar navbar-expand-lg bg-white border-bottom-d1d1d1 px-4">
            <div className="container-fluid nav-iconset flex-nowrap">
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto align-items-center flex-row">
                  <Dropdown className="bg-white">
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                      <div
                        className="d-flex align-items-center icon-hover rounded"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={Profile}
                          alt="avatar"
                          height="38px"
                          width="38px"
                          className="rounded-circle me-2"
                        />
                        <p className="mb-0 text-dark">{user?.username}</p>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="p-3 text-left">
                        <p>{user?.first_name}</p>
                        <p>{user?.email}</p>

                        <button
                          type="button"
                          className="btn btn-primary tasks-dropdown-btn padding-none d-flex align-items"
                          onClick={() => {
                            setModalType("Edit");
                            setModalShow(true);
                          }}
                        >
                          Profile Edit
                        </button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <div />
            {children}
          </div>
        </div>
      </div>
      <EditProfile
        show={modalShow}
        type={modalType}
        onHide={() => {
          setModalShow(false);
        }}
        modelData={modalData}
      />
    </div>
  );
}
