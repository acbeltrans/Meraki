import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./FormSignUp.css";

const FormSignUp = (props) => {

  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState(false);
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
      method: 'POST',
      body: JSON.stringify(
      {
        name: name,
        last_name: last_name,
        email: email,
        password: password
      }

      ),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>
        console.log('Success:', response)
    );
    setEstado(true);
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
              type="text"
              ref={inRefEmail} 
              className="Email" 
              id="Email" 
              placeholder="Email"
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
        <a className="nav-link btnSignUp text" href="/Home" onClick={handleSubmit}>
          Sign up
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default FormSignUp;