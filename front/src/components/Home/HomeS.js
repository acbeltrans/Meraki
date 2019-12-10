import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../NavBar/NavBarS.js";
import ShowEvents from "../ShowEvents/ListEvents.js";
import FormSignUp from "../Form/SignUp/FormSignUp.js";

const Home = () => {
  const [modalShowSignUp, setModalShowSignUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/auth/getUser`)
      .then(res => res.json())
      .then(_user => {
        console.log("user", _user);

        if (_user) setUser(_user);
      });
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
        <div>
          <div className="mHome">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
            </div>
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2 tinBlock" />
            </div>
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2">
                <img
                  src="https://image.flaticon.com/icons/svg/263/263105.svg"
                  width="100"
                  height="100"
                  alt="Arrow"
                  align="right"
                />
              </div>
              <div className="col-sm-3 col-md-3 col-lg-2 tinBlock" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
            </div>
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2 tinBlock" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2" />
              <div className="col-sm-3 col-md-3 col-lg-2">
                <p className="oText">
                  <div>Welcome</div>
                </p>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-1" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
