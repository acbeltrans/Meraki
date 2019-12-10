import React from "react";
import Events from "../Events/Events.js";
import SignNavbar from "../NavBar/NavBarS.js";
import CreateEvent from "../Form/CreateEvent/CreateEvent.js";
import Alert from "react-bootstrap/Alert";

let aux = [];

class ShowGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events               : [],
      modalShowCreateEvent : false,
      alertShow            : false
    };
    this.renderEvents = this.renderEvents.bind(this);
    this.createAlert = this.createAlert.bind(this);
  }

  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/events/79481837315/", {
      headers : {
        Authorization  : "Bearer YM5FWABTSMAYP4F3FRFO",
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
              image       : data.logo.url,
              counter     : 0
            }
          ]
        });
      });
    fetch("https://www.eventbriteapi.com/v3/events/78002049229/", {
      headers : {
        Authorization  : "Bearer YM5FWABTSMAYP4F3FRFO",
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        aux = {
          name        : data.name.text,
          description : data.description.text,
          image       : data.logo.url,
          counter     : 0
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
          <Events name={e.name} url={e.image} description={e.description} counter={e.counter} id={e._id} />
        </div>
      );
    });
  }

  createAlert() {
    if (this.state.alertShow) {
      return (
        <Alert variant="success" onClose={() => this.setState({ alertShow: false })} dismissible>
          El evento se creo correctamente
        </Alert>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <SignNavbar />
        {this.createAlert()}
        <button
          className="btn btn-dark btn-block mb-2"
          onClick={() =>
            this.setState({
              modalShowCreateEvent : true
            })}>
          Create Event
        </button>

        <div className="row">{this.renderEvents()}</div>

        <button
          className="btn btn-dark btn-block mb-2"
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
          isclicked={() =>
            this.setState({
              alertShow            : true,
              modalShowCreateEvent : false
            })}
        />
      </div>
    );
  }
}

export default ShowGroups;
