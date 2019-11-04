import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import SignHome from "./components/SignHome/SignHome.js";
import ShowEvents from "./components/ShowEvents/ShowEvents.js";
import ShowEventsGeneral from "./components/ShowEventsGeneral/ShowEventsGeneral.js";
import EventDetail from "./components/Events/EventDetail.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={SignHome} />
        <Route exact path="/ShowEvents" component={ShowEvents} />
        <Route path="/ShowEventsGeneral" component={ShowEventsGeneral} />
        <Route path="/EventDetail" component={EventDetail} />
      </div>
    </Router>
  );
}

export default App;
