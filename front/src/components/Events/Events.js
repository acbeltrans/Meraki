import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Events = (props) => {
  return (
    <Link className="nav-link" to="/EventDetail">
      <div className="col event-card">
        <h2 className="text-center">{props.name}</h2>
        <img className="mx-auto d-block mt-3" src={props.url} alt="Images taken from API" />
        <p className="eText text-justify mt-3">{props.description}</p>
      </div>
    </Link>
  );
};

export default Events;