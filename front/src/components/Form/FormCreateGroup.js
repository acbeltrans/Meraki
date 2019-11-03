import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function FormSignIn(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a New group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Topic</label>
            <input
              type="text"
              className="form-control"
              id="Topic"
              placeholder="Put on your Topic"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Group
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default FormSignIn;
