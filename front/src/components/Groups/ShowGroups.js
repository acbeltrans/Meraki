import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ShowGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events : []
    };
  }

  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/categories/", {
      headers : {
        Authorization  : process.env.PERSONAL_OAUTH_TOKEN,
        "Content-Type" : "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          events : data
        });
      });
  }

  renderEvents() {
    return this.state.events.map((e) => <div key={e.name}>{e.name}</div>);
  }

  render() {
    return (
      <div>
        <h1>Aqui van los grupos</h1>
        {setTimeout(this.renderEvents(), 10000)}
        <Link to="/CreateGroup" className="nav-link">
          Create a new group
        </Link>
      </div>
    );
  }
}

export default ShowGroups;
