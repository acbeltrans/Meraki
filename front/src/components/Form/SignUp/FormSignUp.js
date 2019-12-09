import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import FormSignIn from "../SignIn/FormSignIn.js";
import SignUpEmail from "./SignUpEmail.js";
import "./FormSignUp.css";

const FormSignUp = props => {
  const [ modalShowSignUpEmail, setModalShowSignUpEmail ] = useState(false);
  const backUrl = process.env.BACK_URL || "http://localhost:3001";

  const handleClick = () => {
    setModalShowSignUpEmail(true);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <a className="nav-link text" href={`${backUrl}/auth/google`}>
            Sign up with Google
          </a>
          <a className="nav-link text" onClick={() => handleClick()}>
            Sign up with Email
          </a>
          <SignUpEmail show={modalShowSignUpEmail} onHide={() => setModalShowSignUpEmail(false)} />
          </form>
      </Modal.Body>
      <Modal.Footer>
        </Modal.Footer>
    </Modal>
  );
};

export default FormSignUp;
