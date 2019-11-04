import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormSignIn from "../Form/FormSignIn.js";
import FormSignUp from "../Form/FormSignUp.js";
import "./NavBar.css";

const NavBar = () => {
  const [ modalShowSignIn, setModalShowSignIn ] = useState(false);

  const [ modalShowSignUp, setModalShowSignUp ] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/">
          <img className="icon" src="" width="55" height="55" title="Brand image" alt="" />
        </a>
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
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              {/*               <Link to="/ShowGroups" className="nav-link">
                Groups
              </Link> */}
              <a
                className="nav-link"
                href="https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=77CY3HYHCI2MAQYUSM">
                Groups
              </a>
            </li>
          </ul>
        </div>

        <button onClick={() => setModalShowSignUp(true)}>Sign Up</button>

        <button onClick={() => setModalShowSignIn(true)}>Sign In</button>

        <FormSignIn show={modalShowSignIn} onHide={() => setModalShowSignIn(false)} />

        <FormSignUp show={modalShowSignUp} onHide={() => setModalShowSignUp(false)} />
      </nav>
    </div>
  );
};

export default NavBar;
