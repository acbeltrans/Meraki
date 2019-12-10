import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import HomeS from "./components/Home/HomeS.js";
import ShowEvents from "./components/ShowEvents/ShowEvents.js";
import ShowEventsGeneral from "./components/ShowEventsGeneral/ShowEventsGeneral.js";
import EventDetail from "./components/Events/EventDetail.js";
import About from "./components/About/About.js";
import CreateEvent from "./components/Form/CreateEvent/CreateEvent.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ShowEvents" component={ShowEvents} />
        <Route path="/About" component={About} />
        <Route path="/ShowEventsGeneral" component={ShowEventsGeneral} />
        <Route path="/EventDetail" component={EventDetail} />
        <Route path="/CreateEvent" component={CreateEvent} />
        <Route path="/Login" component={HomeS} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
