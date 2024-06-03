import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./deleteProfileConfirmation.css"

function DeleteProfileConfirmation(props) {
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
                    <h5 className="deleteProfileModelBodyText">Are you sure you want to delete this profile</h5>
                    <p className="deleteProfileModelBodyText">
                        By deleting this profile the all the user Data of this account and related Medical Records will be deleted.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteProfileConfirmation;
