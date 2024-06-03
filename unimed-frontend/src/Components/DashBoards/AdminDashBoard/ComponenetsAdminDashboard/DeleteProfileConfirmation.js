import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./deleteProfileConfirmation.css"

function DeleteProfileConfirmation(props) {
    const handleDelete = () => {
        fetch(`${props.apiDeleteLink}/${props.userId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log("Delete request successful");
                return response.text(); // Read response as text
            } else {
                throw new Error('Failed to delete profile');
            }
        })
        .then(data => {
            console.log("Success:", data);
            props.onHide(); 
            window.location.replace(props.navigationAfterDeleteLink); 
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div>
            <Modal
                {...props}                
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered                
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className="deleteProfileModelHeading">Warning</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="deleteProfileModelBodyTextHeading">Are you sure you want to delete this profile</h5>
                    <p className="deleteProfileModelBodyText">
                        By deleting this profile, all the user data of this account and related medical records will be deleted.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="Danger" onClick={handleDelete}>Delete Profile</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteProfileConfirmation;
