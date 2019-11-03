import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import CreateGroups from "./components/Groups/CreateGroup.js";
import ShowGroups from "./components/Groups/ShowGroups.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/CreateGroup" component={CreateGroups} />
        <Route path="/ShowGroups" component={ShowGroups} />
      </div>
    </Router>
  );
}

export default App;
