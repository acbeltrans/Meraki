const express = require("express");
const router = express.Router();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();

/* GET home page. */
router.get("/", function(req, res /*, next*/) {
  res.render("index", { title: "Express" });
});

router.get("/users", (req, res) => {
  myMongoLib
    .getUsers()
    .then(docs => res.send(docs))
    .catch(err => res.send({ err: true, msg: err }));
});

router.post("/users", (req, res) => {
  const name = req.body.name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  const new_user = {
    name: name,
    last_name: last_name,
    email: email,
    password: password,
  };

  myMongoLib
    .postUser(new_user)
    .then(docs => res.send(docs.ops[0]))
    .catch(err => res.send({ err: true, msg: err }));
});


router.get("/messages", (req, res) => {
  myMongoLib
    .getMessages()
    .then(docs => res.send(docs))
    .catch(err => res.send({ err: true, msg: err }));
});

router.post("/messages", (req, res) => {
  const message_name = req.body.name;
  const message_quest = req.body.quest;
  const message_users = req.body.users;
  const message_messages = [];

  const new_message = {
    name: message_name,
    quest: message_quest,
    users: message_users,
    messages: message_messages
  };

  myMongoLib
    .postMessage(new_message)
    .then(docs => res.send(docs.ops[0]))
    .catch(err => res.send({ err: true, msg: err }));
});

module.exports = router;