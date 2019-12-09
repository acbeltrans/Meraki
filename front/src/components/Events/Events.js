import React, { useState, useRef } from "react";

const Events = (props) => {
  const [ counter, setCounter ] = useState(props.counter);

  const handleClick = () => {
    setCounter(counter + 1);
    fetch("/putEvents", {
      method  : "PUT",
      body    : JSON.stringify({
        id : props.id
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  return (
    <div className="col event-card">
      <h2 className="text-center">{props.name}</h2>
      <img className="mx-auto d-block mt-3" src={props.url} alt="Images taken from API" />
      <p className="eText text-justify mt-3">{props.description}</p>
      <button className="btn" id="likeBtn" onClick={handleClick}>
        suscribete 👍🏻
        <span className="ml-2">{counter}</span>
      </button>
    </div>
  );
};

export default Events;
