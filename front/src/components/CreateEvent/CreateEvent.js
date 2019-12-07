import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const CreateEvent = (props) => {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image, setImage ] = useState("");
  const inRefName = useRef();
  const inRefDescription = useRef();
  const inRefImage = useRef();

  const onChangeName = () => {
    setName(inRefName.current.value);
  };

  const onChangeDescription = () => {
    setDescription(inRefDescription.current.value);
  };

  const onChangeImage = () => {
    setImage(inRefImage.current.value);
  };

  const handleSubmit = () => {
    fetch("/postEvent", {
      method  : "POST",
      body    : JSON.stringify({
        name        : name,
        description : description,
        image       : image
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          Create Event
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
              placeholder="Event Name"
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input
              onChange={onChangeDescription}
              type="text"
              ref={inRefDescription}
              className="Description"
              id="Description"
              placeholder="Tell the world what is the event about ..."
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              onChange={onChangeImage}
              type="text"
              ref={inRefImage}
              className="Image"
              id="Image"
              placeholder="Image"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={handleSubmit}>
          Create Event
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEvent;
