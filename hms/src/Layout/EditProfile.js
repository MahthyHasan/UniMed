import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { values } from "underscore";

export const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    // userRole: "",
    errors: {},
});
const storedUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const validateForm = () => {
    const errors = {};
    if (!formData.first_name) {
      errors.first_name = "First name is required!";
    }
    if (!formData.last_name) {
      errors.last_name = "Last name is required!";
    }
    if (!formData.email) {
      errors.email = "Email is required!";
    }
    // if (!formData.userRole) {
    //   errors.userRole = "userRole  is required!";
    // }
    setFormData((prevState) => ({ ...prevState, errors }));
    return Object.keys(errors).length === 0;
  }
  const [userNames, setUserNames] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const handleCancel = () => {
    console.log("Form is cancelled")
    navigate('/home')
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log(formData)
  //     console.log("Updated successfully")
  //   } else {
  //     console.log("Form is invalid");
  //   }
  // };


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/setting/1")
      .then((response) => {
        setFormData(response.data);
        console.log(response.data);
        console.log(formData);
        console.log("Settings Date successfully!");
      })
      .catch((error) => {
        console.error("Error fetching Settings Date :", error);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (validateForm()) {
        axios
          .put("http://127.0.0.1:8000/setting/1", formData)
          .then(() => {
            console.log(formData);
            console.log("Task created successfully");
            alert("Task created successfully!");
            // setFormData("")
          })
          .catch(() => {
            alert("Task creation failed!");
          });
      } else {
        console.log("Invalid form");
      }
    } catch (err) {
      alert("Task creation Failed");
    }
  }
console.log(formData);



  function statusUpdate(status) {
    values.status = status;
    console.log(props.selectedAppointment);
    console.log(props.selectedAppointment._id);
  }
  const [formSubmitted, setFormSubmitted] = useState({});

  useEffect(()=>{

       
    console.log(storedUser);
    setFormData(storedUser)

},[])

  return (

    <Modal

      {...props}
      size="ms"
      position='top-right'
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-right-top" // Add a custom class for styling
    >

      <Modal.Header
        closeButton


      >
        {
          <Modal.Title id="contained-modal-title-vcenter">
            {props.type === "Edit" && <div> Edit profile</div>}

          </Modal.Title>
        }
      </Modal.Header>
      <Modal.Body scrollable>
        {/* {formData.map((user, index) => ( */}

        <form onSubmit={handleSubmit} >
          {/* <div className="edit-img mb-3">
            {/<img src={Edit_img} alt="Profile image"/>/}
          </div> */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">First name</label>
              <input type="text" className="form-control" placeholder="Enter First name"
                name='first_name' value={formData?.first_name || ""} onChange={handleChange}
              />
              {formData?.errors?.first_name && (
                <p style={{ color: "red" }}>{formData?.errors?.first_name}</p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">Last name</label>
              <input type="text" className="form-control" placeholder="Enter Last name" name='last_name'
                value={formData.last_name || ""} onChange={handleChange}
              />
              {formData?.errors?.last_name && (
                <p style={{ color: "red" }}>{formData?.errors?.last_name}</p>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" placeholder="Enter email"
                value={formData.email || ""} onChange={handleChange}
              />
              {formData?.errors?.email && (
                <p style={{ color: "red" }}>{formData?.errors?.email}</p>
              )}
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="userRole" className="form-label"> user Role</label>
              <input type="text" className="form-control" name="userRole" placeholder="Enter user Role"
                value={formData.userRole || ""} onChange={handleChange}
              />
              {formData?.errors?.userRole && (
                <p style={{ color: "red" }}>{formData?.errors?.userRole}</p>
              )}
            </div>
          </div> */}
          {/* <div className="modal-footer ">
                                
                                    <button className="btn btn-secondary" type="Cancel"
                                            onClick={handleCancel}>Cancel
                                    </button>
                                    <button className="project-settings-btn" type="submit"
                                            onClick={handleSubmit}>Save
                                    </button>
                                
                                </div> */}
          {/* <div className={"modal-footer student-settings-btn"}>

            <button type="submit" className={"btn btn-secondary  project-settings-btn"}
              onClick={handleSubmit}>Save
            </button>

          </div> */}
        </form>

        {/* ))} */}
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className={"btn btn-secondary"}
          onClick={() => {
            if (!formSubmitted) {
              // Prevent hiding the modal if the form is submitted
              props.onHide();
            }
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className={"btn btn-primary"}
          onClick={handleSubmit}
        >
          save
        </button>






      </Modal.Footer>
    </Modal>

  );
};