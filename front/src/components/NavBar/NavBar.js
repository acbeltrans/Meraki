import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormSignIn from "../Form/SignIn/FormSignIn.js";
import FormSignUp from "../Form/SignUp/FormSignUp.js";
import "./NavBar.css";

const NavBar = () => {
  const [ modalShowSignIn, setModalShowSignIn ] = useState(false);

  const [ modalShowSignUp, setModalShowSignUp ] = useState(false);

  const [ logIn, setLogIn ] = useState(false);

  const verifyLogIn = () => {
    if (logIn) {
      return (
        <Link to="/Home" className="nav-link">
          Home
        </Link>
      );
    } else {
      return (
        <Link to="/" className="nav-link">
          Home
        </Link>
      );
    }
  };

  const verifyLogInEvents = () => {
    if (logIn) {
      return (
        <Link to="/ShowEvents" className="nav-link">
          Events
        </Link>
      );
    } else {
      return (
        <Link to="/ShowEventsGeneral" className="nav-link">
          Events
        </Link>
      );
    }
  };

  const handleClick = () => {
    setModalShowSignIn(true);
    setLogIn(true);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">{verifyLogIn()}</li>
            <li className="nav-item">{verifyLogInEvents()}</li>
          </ul>
        </div>

        <button className="btn btn-ligth" onClick={() => setModalShowSignUp(true)}>
          Sign Up
        </button>

        <button className="btn btn-dark" onClick={() => handleClick()}>
          Sign In
        </button>

        <FormSignIn show={modalShowSignIn} onHide={() => setModalShowSignIn(false)} />

        <FormSignUp show={modalShowSignUp} onHide={() => setModalShowSignUp(false)} />
      </nav>
    </div>
  );
};

export default NavBar;
