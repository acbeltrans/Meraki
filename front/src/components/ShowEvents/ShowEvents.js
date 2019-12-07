import React from "react";
import Events from "../Events/Events.js";
import SignNavbar from "../SignNavBar/SignNavBar.js";
import CreateEvent from "../CreateEvent/CreateEvent.js";

let aux = [];

class ShowGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events               : [],
      modalShowCreateEvent : false
    };
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/events/79481837315/", {
      headers : {
        Authorization  : "Bearer DE5VNBJ7LTY2EMPDM6B4",
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          events : [
            {
              name        : data.name.text,
              description : data.description.text,
              image       : data.logo.url
            }
          ]
        });
      });
    fetch("https://www.eventbriteapi.com/v3/events/78002049229/", {
      headers : {
        Authorization  : "Bearer DE5VNBJ7LTY2EMPDM6B4",
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        aux = {
          name        : data.name.text,
          description : data.description.text,
          image       : data.logo.url
        };

        this.setState({
          events : this.state.events.concat(aux)
        });
        aux = [];
      });
    fetch("/events").then((res) => res.json()).then((data) => {
      aux = data;
      this.setState({
        events : this.state.events.concat(aux)
      });
      aux = [];
    });
  }
  renderEvents() {
    return this.state.events.map((e) => {
      return (
        <div className="col" key={e.name}>
          <Events name={e.name} url={e.image} description={e.description} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <SignNavbar />
        <div className="row">{this.renderEvents()}</div>

        <button
          className="btn btn-dark"
          onClick={() =>
            this.setState({
              modalShowCreateEvent : true
            })}>
          Create Event
        </button>

        <CreateEvent
          show={this.state.modalShowCreateEvent}
          onHide={() =>
            this.setState({
              modalShowCreateEvent : false
            })}
        />
      </div>
    );
  }
}

export default ShowGroups;
