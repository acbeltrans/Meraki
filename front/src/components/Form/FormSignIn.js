import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./FormSignIn.css";

let url = "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=";

class FormSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data     : [],
      email    : "",
      estado   : false,
      password : ""
    };
  }

  componentDidMount() {
    fetch("/users", {
      method  : "GET",
      headers : {
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((data) =>
        this.setState({
          data : data
        })
      );
  }

  getData = () => {
    this.state.data.map((d) => <div key={d._id}> {this.check(d.email, d.password)} </div>);
  };

  check(email, password) {
    if (email === this.state.email && password === this.state.password) {
      this.setState({ estado: true });
    }
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  moreChecking = (e) => {
    this.getData();
  };

  render(props) {
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title className="title" id="contained-modal-title-vcenter">
            Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input onChange={this.onChangeEmail} type="text" className="Email" id="Email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={this.onChangePassword}
                type="password"
                className="Password"
                id="Password"
                placeholder="Password"
              />
            </div>
            {console.log(this.state.estado, "help")}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <a
            className="nav-link btnSignIn text"
            href={url.concat(process.env.API_AUTH || "77CY3HYHCI2MAQYUSM")}
            onClick={this.moreChecking}>
            Sign in
          </a>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FormSignIn;
