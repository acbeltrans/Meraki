import React from "react";

const Events = (props) => {
  return (
    <div className="row">
      <div className="col">
        <h2>{props.name}</h2>
        <img src={props.url} />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Events;
