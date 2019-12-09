import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import FormSignIn from "../SignIn/FormSignIn.js";
import SignUpEmail from "./SignUpEmail.js";
import "./FormSignUp.css";

const FormSignUp = props => {
  const [modalShowSignUpEmail, setModalShowSignUpEmail] = useState(false);
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
          <form action={`${backUrl}/auth/google`}>
            <input
              className="nav-link text btnSignUp1"
              type="submit"
              value="Sign up with Google"
            />
          </form>
          <a className="nav-link text btnSignUp2">Or</a>

          <form>
            <input
              className="nav-link text btnSignUp1"
              type="button"
              value="Sign up with Email"
              onClick={() => handleClick()}
            />
          </form>
          <SignUpEmail
            show={modalShowSignUpEmail}
            onHide={() => setModalShowSignUpEmail(false)}
          />
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default FormSignUp;
