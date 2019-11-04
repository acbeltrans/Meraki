import React from "react";
import "./SignHome.css";
import SignNavbar from "../SignNavBar/SignNavBar.js";

const SignHome = () => {
  return (
    <div>
      <SignNavbar />
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
            <p className="oText">¡Welcome!</p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-1" />
        </div>
      </div>
    </div>
  );
};

export default SignHome;
