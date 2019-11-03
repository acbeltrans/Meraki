import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import CreateGroups from "./components/Groups/CreateGroup.js";
import ShowGroups from "./components/Groups/ShowGroups.js";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateGroup" component={CreateGroups} />
        <Route exact path="/ShowGroups" component={ShowGroups} />
      </Router>
    </div>
  );
}

export default App;
