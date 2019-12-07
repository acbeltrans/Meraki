let express = require("express");
let router = express.Router();

let users = undefined;

/* GET all users */
function getUsers(fnCBK, errCBK) {
  users.find({}).toArray((err, data) => {
    if (err) {
      errCBK(err);
      return;
    }

    console.log("# users", data.length);

    fnCBK(data);
  });
}

router.get("/", (req, res) => {
  users = req.config.usersDB.users;
  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  getUsers(fnCBK, errCBK);
});

/* GET user by email */
function getUser(userEmail, fnCBK, errCBK) {
  users.find({ correo: userEmail }).toArray((err, data) => {
    if (err) {
      errCBK(err);
      return;
    }

    console.log("# users", data.length);
    console.log(data[0]);

    fnCBK(data);
  });
}

router.get("/user", (req, res) => {
  users = req.config.usersDB.users;
  userEmail = req.query.email;

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  getUser(userEmail, fnCBK, errCBK);
});

/*POST user*/
function postUser(new_user, fnCBK, errCBK) {
  users.insertOne(new_user, (err, res) => {
    if (err) {
      errCBK(err);
      return;
    }

    console.log(new_user + "inserted");
    fnCBK("Usuario agregado con exito");
  });
}
router.post("/", (req, res) => {
  users = req.config.usersDB.users;

  let name = req.body.name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let password = req.body.password;

  let new_user = {
    name      : name,
    last_name : last_name,
    email     : email,
    password  : password
  };

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  postUser(new_user, fnCBK, errCBK);
});

/*UPDATE user*/
function updateUserDB(query, update_user, fnCBK, errCBK) {
  users.updateOne(query, update_user, (err, res) => {
    if (err) {
      errCBK(err);
      return;
    }

    console.log(update_user + " updated");
    fnCBK("Usuario actualizado con exito");
  });
}
router.put("/user", (req, res) => {
  users = req.config.usersDB.users;

  let name = req.body.name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let password = req.body.password;

  let update_user = {
    $set : {
      name      : name,
      last_name : last_name,
      email     : email,
      password  : password
    }
  };

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  let query = { email: email };
  updateUser(query, update_user, fnCBK, errCBK);
});

module.exports = router;
