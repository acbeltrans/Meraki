import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./SignUpEmail.css";

const SignUpEmail = props => {
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inRefName = useRef();
  const inRefLastName = useRef();
  const inRefEmail = useRef();
  const inRefPassword = useRef();

  const onChangeName = () => {
    setName(inRefName.current.value);
  };

  const onChangeLastName = () => {
    setLastName(inRefLastName.current.value);
  };

  const onChangeEmail = () => {
    setEmail(inRefEmail.current.value);
  };

  const onChangePassword = () => {
    setPassword(inRefPassword.current.value);
  };

  const handleSubmit = () => {
    fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        last_name: last_name,
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
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
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={onChangeName}
              type="text"
              ref={inRefName}
              className="Name"
              id="Name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={onChangeLastName}
              type="text"
              ref={inRefLastName}
              className="Last Name"
              id="Last Name"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={onChangeEmail}
              type="email"
              ref={inRefEmail}
              className="Email"
              id="Email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={onChangePassword}
              type="password"
              ref={inRefPassword}
              className="Password"
              id="Password"
              placeholder="Password"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Link
          className="nav-link btnSignUp text"
          to="/ShowEvents"
          onClick={handleSubmit}
        >
          Sign up
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpEmail;