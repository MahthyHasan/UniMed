import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import UserProfileCard from "../../../ComponenetsAdminDashboard/UserProfileCard";
import "./listAllAdminsPage.css";
import { Button } from "react-bootstrap";
import CreateProfile from "../../../ComponenetsAdminDashboard/CreateProfile";

function ListAllAdminsPage() {
  const [admins, setAdmins] = useState([]);
  const [search, setSearch] = useState("");
  const [filterAdmins, setFilterAdmins] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // Fetch the admins data from the backend
    axios
      .get("http://localhost:8088/api/v1/admin/getAll")
      .then((response) => {
        setAdmins(response.data);
        setFilterAdmins(response.data); // Initialize filtered admins with all admins
      })
      .catch((error) => {
        console.error("There was an error fetching the admins data!", error);
      });
  }, []);

  useEffect(() => {
    // Filter admins based on search term
    const filtered = admins.filter(
      (admin) =>
        admin.first_name &&
        admin.first_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterAdmins(filtered);
  }, [search, admins]);
  return (
    <AdminLayout>
      <div className="list-All-admins-admin-page">
        <Form>
          <InputGroup className="mt-3 input-group-for-admin-searchbar">
            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search admins by name"
            />
          </InputGroup>
        </Form>
        <div className="row">
          {filterAdmins.map((admin) => (
            <div className="col-4 mt-3" key={admin._id}>
              <UserProfileCard
                name={admin.first_name}
                userId={admin._id}
                profileLink={`/showAdminProfilePage/${admin._id}`} // Pass profileLink prop
              />
            </div>
          ))}
        </div>
        <div className="row">
          <Button
            className="addProfileButton"
            onClick={() => setModalShow(true)}
            style={{ backgroundColor: "#18cdca" }}
          >
            <p className="mt-1">Add Profile</p>
          </Button>
        </div>
        <CreateProfile
          show={modalShow}
          onHide={() => setModalShow(false)}
          apiSaveLink="http://localhost:8088/api/v1/admin/save"
          navigationLink="/listAllAdmins"
        />
      </div>
    </AdminLayout>
  );
}

export default ListAllAdminsPage;
