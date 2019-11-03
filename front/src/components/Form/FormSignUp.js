import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function FormSignUp(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="Name" className="form-control" id="Name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="Last Name" className="form-control" id="LastName" aria-describedby="lastName" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="Email" aria-describedby="email" placeholder="Email address"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="Password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormSignUp;
