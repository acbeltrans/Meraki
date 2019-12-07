const express = require("express");
const router = express.Router();

const MyMongoLib = require("../MyMongoLib.js");

const myMongoLib = MyMongoLib();

/* Get Events */

router.get("/events", function(req, res) {
  myMongoLib.getEvents().then((doc) => res.send(doc)).catch((err) => res.send(err));
});

/* Post Event */

router.post("/postEvent", (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  let image = req.body.image;

  let newEvent = {
    name        : name,
    description : description,
    image       : image
  };

  myMongoLib.postEvent(newEvent).then((doc) => res.send(doc)).catch((err) => res.send(err));
});

module.exports = router;
