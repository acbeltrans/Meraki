import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import SignHome from "./components/SignHome/SignHome.js";
import CreateGroups from "./components/Groups/CreateGroup.js";
import ShowGroups from "./components/Groups/ShowGroups.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={SignHome} />
        <Route path="/CreateGroup" component={CreateGroups} />
        <Route path="/ShowGroups" component={ShowGroups} />
      </div>
    </Router>
  );
}

export default App;
