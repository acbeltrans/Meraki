import React, { useState, useEffect } from "react";
import SignNavbar from "../NavBar/NavBar.js";
import connect from "../Images/connect.png";
import ease from "../Images/ease.png";
import motivate from "../Images/motivate.png";
import gratitude from "../Images/gratitude.png";
import empathy from "../Images/empathy.png";
import solidarity from "../Images/solidarity.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <SignNavbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-x1-12">
            <h1 className="text-center bigTitle">
              <u>Our</u> mission
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-x1-12">
            <h5 className="text-center smallTitle">
              Help people across the city to unite under one cause
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-x1-2">
            <h6 className="tinyTitle">Connect</h6>
          </div>
          <div className="col-lg-2 col-x1-2">
            <img
              src={connect}
              width="90"
              height="90"
              alt="image of a calendar in black and white"
            />
          </div>
          <div className="col-lg-2 col-x1-2">
              <h6 className="tinyTitle">To ease</h6>
            </div>
            <div className="col-lg-2 col-x1-2">
              <img
                src={ease}
                width="90"
                height="90"
                alt="image of a list in black and white"
              />
            </div>
          <div className="col-lg-2 col-x1-2">
              <h6 className="tinyTitle">Motivate</h6>
            </div>
            <div className="col-lg-2 col-x1-2">
              <img
                src={motivate}
                width="90"
                height="90"
                alt="image of a shopping cart in black and white"
              />
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              We expect to connect more and more people who are interested in
              volunteering
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              We want to make it easier for people to find information about
              volunteers
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              We wish to motivate people to create their own volunteer events
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-x1-12">
            <h1 className="text-center bigTitle">
              <u>Our</u> values
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-x1-12">
            <h5 className="text-center smallTitle">
              Gratitude, Empathy and Solidarity
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-x1-2">
              <h6 className="tinyTitle">Gratitude</h6>
            </div>
            <div className="col-lg-2 col-x1-2">
              <img
                src={gratitude}
                width="90"
                height="90"
                alt="image of a calendar in black and white"
              />
            </div>
          <div className="col-lg-2 col-x1-2">
              <h6 className="tinyTitle">Empathy</h6>
            </div>
            <div className="col-lg-2 col-x1-2">
              <img
                src={empathy}
                width="90"
                height="90"
                alt="image of a list in black and white"
              />
            </div>
          <div className="col-lg-2 col-x1-2">
              <h6 className="tinyTitle">Solidarity</h6>
            </div>
            <div className="col-lg-2 col-x1-2">
              <img
                src={solidarity}
                width="90"
                height="90"
                alt="image of a shopping cart in black and white"
              />
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              We must never forget that the greatest appreciation is not to
              pronounce it words, but to live according to them
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              The most basic of human needs is to understand and be understood.
              The best way to understand a person is to listen
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              Great opportunities to help others rarely come, but small ones
              surround us every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
