import React, { useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";

const ShowGroups = () => {
  useEffect(() => {
    fetch(process.env.API_URL).then(data => {
      console.log("Aqui van", data);
    });
  });

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
