import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignNavBar from "../SignNavBar/SignNavBar.js";
//instead of this page you can redirect to  https://www.eventbrite.com/manage/events/onboarding/event/name
const EventDetail = () => {
  return (
    <div>
      <SignNavBar />
      <h1 className="container text-center">Ups this page is on building, hope you understand :)</h1>
    </div>
  );
};

export default EventDetail;
