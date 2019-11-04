import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormSignIn from "../Form/FormSignIn.js";
import FormSignUp from "../Form/FormSignUp.js";
import "./NavBar.css";

const NavBar = () => {
  const [ modalShowSignIn, setModalShowSignIn ] = useState(false);

  const [ modalShowSignUp, setModalShowSignUp ] = useState(false);

  return (
    <div className = "container">
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
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <Link to="" className="nav-link" onClick={() => setModalShowSignUp(true)}>Sign Up</Link>

        <Link to="" className="nav-link" onClick={() => setModalShowSignIn(true)}>Sign In</Link>

        <FormSignIn show={modalShowSignIn} onHide={() => setModalShowSignIn(false)} />

        <FormSignUp show={modalShowSignUp} onHide={() => setModalShowSignUp(false)} />
      </nav>
    </div>
  );
};

export default NavBar;
