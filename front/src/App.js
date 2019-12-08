import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import SignHome from "./components/SignHome/SignHome.js";
import ShowEvents from "./components/ShowEvents/ShowEvents.js";
import ShowEventsGeneral from "./components/ShowEventsGeneral/ShowEventsGeneral.js";
import EventDetail from "./components/Events/EventDetail.js";
import CreateEvent from "./components/Form/CreateEvent/CreateEvent.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={SignHome} />
        <Route path="/ShowEvents" component={ShowEvents} />
        <Route path="/ShowEventsGeneral" component={ShowEventsGeneral} />
        <Route path="/EventDetail" component={EventDetail} />
        <Route path="/CreateEvent" component={CreateEvent} />
      </Switch>
    </Router>
  );
}

export default App;
