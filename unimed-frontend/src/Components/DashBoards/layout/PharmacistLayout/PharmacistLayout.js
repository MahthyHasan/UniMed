import React, { useState, useEffect } from "react";
import Profile from "../../../../assets/profile-img.svg";
import SideClose from "../../../../assets/icons/left-arrow.svg";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../../../../redux/actions";
import home from "../../../../assets/icons2/home-p.svg";
import { EditProfile } from "./EditProfile";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import logopath from "../../../../assets/logo.png";

import QrCode from "../../../../assets/icons2/qr-reader-svgrepo-com.svg";
import Medicine from "../../../../assets/icons2/drugs-pill-svgrepo-com.svg";
import Drugs from "../../../../assets/icons2/clinic-history-svgrepo-com.svg";
import Supply from "../../../../assets/icons2/office-discussion-chat-communication-goup-2-svgrepo-com.svg";
import BellIcon from "../../../../assets/icons2/bell.svg";

// WebSocket setup
const WEBSOCKET_URL = "http://localhost:8088/websocket-endpoint"; // Update with your actual server URL

export default function PharmacistLayout({ children }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const open = useSelector((state) => state.setting.toggle);
  const [modalType, setModalType] = useState("view");
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [user, setUser] = useState(null);

  const [notifications, setNotifications] = useState([]);
  const [profilePopupShow, setProfilePopupShow] = useState(false);
  const navigate = useNavigate();

  function toggleDrawer() {
    dispatch(changeToggle(!open));
  }

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleProfileClick = () => {
    setProfilePopupShow(!profilePopupShow);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={
            (!open ? " col-xl-2" : " w-100px") +
            (!show ? " mobile-navbar-hide " : " mobile-show ") +
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
                  className={!!open && "rotate-180"}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 nav-link-text-color pt-4">
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/ClinicForPharmacist"}
              >
                <div className={"d-flex"}>
                  <img
                    src={home}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className="me-2"
                  />
                  {!open && <div className={""}>Home</div>}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/Mali"}
              >
                <div className={"d-flex"}>
                  <img
                    src={Medicine}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className=" me-2"
                  />
                  {!open && <div className={""}>Drug Inventory</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/PharmacyReport"}
              >
                <div className={"d-flex"}>
                  <img
                    src={Drugs}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className=" me-2"
                  />
                  {!open && <div className={""}>Reports</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2 log-out-button-in-side-navbar"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/settings"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="log-out"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>log-out</div>}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <nav className="navbar navbar-expand-lg bg-white border-bottom-d1d1d1 px-4">
            <div className="container-fluid nav-iconset flex-nowrap">
              <button
                className="navbar-toggler "
                type="button"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="">
                <ul className="navbar-nav ms-auto align-items-center flex-row">
                  {/* Bell icon for notifications */}
                  <li className="nav-item me-3">
                    <img
                      src={BellIcon}
                      alt="Notifications"
                      height="24px"
                      width="24px"
                      className="icon-hover"
                      onClick={() => {
                        // Handle bell icon click
                        if (notifications.length > 0) {
                          alert("You have new notifications!");
                        }
                      }}
                    />
                  </li>
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
                        <p>{user?.mobile}</p>
                        <p>{user?.gender}</p>
                        <button
                          className="btn btn-dark w-100 mt-2"
                          onClick={handleProfileClick}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </nav>
          <main className="pt-4 px-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
