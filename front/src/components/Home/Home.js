import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../NavBar/NavBar.js";
import FormSignUp from "../Form/SignUp/FormSignUp.js";

const Home = () => {
  const [ modalShowSignUp, setModalShowSignUp ] = useState(false);
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
      {user ? (
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
              width="150"
              height="150"
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
            <p className="oText"><div>Welcome {user.name}</div></p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-1" />
        </div>
      </div>
        </div>
      ) : (
        <div className="mainHome">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2">
              <img
                src="https://image.flaticon.com/icons/svg/263/263105.svg"
                width="70"
                height="70"
                alt="Arrow"
                align="right"
              />
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2">
              <p className="text">
                than to do something for others."<br /> -Martin Luther King Jr.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2">
              <p className="text">we must learn that there is nothing greater</p>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2 tinyBlock" />
          </div>
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2">
              <p className="text">"Somewhere along the way,</p>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2 tinyBlock" />
            <div className="col-sm-3 col-md-3 col-lg-2" />
          </div>
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2 tinyBlock" />
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-2" />
            <div className="col-sm-3 col-md-3 col-lg-1">
              <img
                src="https://image.flaticon.com/icons/svg/60/60758.svg"
                width="70"
                height="70"
                alt="Arrow"
                align="right"
              />
            </div>
            <div className="col-sm-3 col-md-3 col-lg-1">
              <p className="otherText">
                <Link to="/" className="uText" onClick={() => setModalShowSignUp(true)}>
                  Join us
                </Link>
                <br /> in this aventure
              </p>
              <FormSignUp show={modalShowSignUp} onHide={() => setModalShowSignUp(false)} />
            </div>
          </div>
        </div>
      )}       
    </div>
  );
};

export default Home;
