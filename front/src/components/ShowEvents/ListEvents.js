import React from "react";
import Events from "../Events/Events.js";
import SignNavbar from "../NavBar/NavBar.js";
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
              image       : data.logo.url
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
        {this.createAlert()}

        <div className="row">{this.renderEvents()}</div>
        <CreateEvent
          show={this.state.modalShowCreateEvent}
          onHide={() =>
            this.setState({
              modalShowCreateEvent : false
            })}
          click={() =>
            this.setState({
              alertShow : true
            })}
        />
      </div>
    );
  }
}

export default ShowGroups;
