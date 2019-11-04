import React from "react";
import Events from "../Events/Events.js";
import SignNavbar from "../SignNavBar/SignNavBar.js";

let aux = [];

class ShowGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events : [
        {
          name        : "",
          description : "",
          image       : ""
        }
      ]
    };
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/events/79481837315/", {
      headers : {
        Authorization  : process.env.PERSONAL_OAUTH_TOKEN || "Bearer DE5VNBJ7LTY2EMPDM6B4",
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
        Authorization  : process.env.PERSONAL_OAUTH_TOKEN || "Bearer DE5VNBJ7LTY2EMPDM6B4",
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
      </div>
    );
  }
}

export default ShowGroups;
