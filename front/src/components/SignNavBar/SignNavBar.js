import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SignNavBar.css";

const SignNavBar = () => {
  const [ modalShowSignOut, setModalShowSignOut ] = useState(false);

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
              <Link to="/Home" className="nav-link">
                Home
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

        <Link to="/" className="nav-link">
            Sign Out
        </Link>
      </nav>
    </div>
  );
};

export default SignNavBar;