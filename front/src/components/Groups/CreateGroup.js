import React, { useState } from "react";
import FormCreateGroup from "../Form/FormCreateGroup.js";
import "./CreateGroup.css";

const CreateGroup = () => {
  const [modalShowCreateGroup, setModalShowCreateGroup] = useState(false);

  return (
    <div>
      <h1>Lets create a new group </h1>
      <button
        className="btn btn-primary"
        onClick={() => setModalShowCreateGroup(true)}
      >
        Create a group
      </button>
      <FormCreateGroup
        show={modalShowCreateGroup}
        onHide={() => setModalShowCreateGroup(false)}
      ></FormCreateGroup>
    </div>
  );
};

export default CreateGroup;
