import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ShowGroups = () => {
  useEffect(() => {
    fetch("https://www.eventbriteapi.com/v3/events/search/", {
      method: "GET",
      headers: {
        Authorization: process.env.PERSONAL_OAUTH_TOKEN,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("Aqui van", data);
      });
  }, []);

  return (
    <div>
      <h1>Aqui van los grupos</h1>
      <Link to="/CreateGroup" className="nav-link">
        Create a new group
      </Link>
    </div>
  );
};

export default ShowGroups;
