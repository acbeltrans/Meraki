const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const MyMongoLib = function() {
  const MyMongoLib = this || {};

  // Connection URL
  /*  */
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";
  // Database Name
  const dbName = "Meraki";
  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  MyMongoLib.getUsers = () =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Users");

        return collection
          .find({})
          .toArray()
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  /* Get Events */

  MyMongoLib.getEvents = () =>
    new Promise((resolve, reject) => {
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const eventsCol = db.collection("Event");

        return eventsCol
          .find({})
          .limit(20)
          .toArray()
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  /* Get events by id */
  MyMongoLib.updateEventsById = (id) => {
    new Promise((resolve, reject) => {
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Event");

        return collection
          .updateOne({ _id: id }, { $inc: { counter: 1 } })
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });
  };

  MyMongoLib.getUser = (googleId) =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Users");

        return collection
          .find({ googleId: googleId })
          .toArray()
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.getUserById = (id) =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Users");

        return collection
          .find({ googleId: id })
          .toArray()
          .then((data) => {
            console.log("mis daticos: ", data);
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.postUser = (newUser) =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Users");

        return collection
          .insertOne(newUser)
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  /* Post Event */
  MyMongoLib.postEvent = (newEvent) =>
    new Promise((resolve, reject) => {
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const eventsCol = db.collection("Event");

        return eventsCol
          .insertOne(newEvent)
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.getMessages = () =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Messages");

        return collection
          .find({})
          .toArray()
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.getMessage = (message_id) =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        console.log("Get Message - Connected correctly to server");

        const db = client.db(dbName);
        const collection = db.collection("Messages");

        return collection
          .find({ _id: ObjectId(message_id) })
          .toArray()
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.postMessage = (newMessage) =>
    new Promise((resolve, reject) => {
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Messages");

        return collection
          .insertOne(newMessage)
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.deleteMessage = (message_id) =>
    new Promise((resolve, reject) => {
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }

        const db = client.db(dbName);
        const collection = db.collection("Messages");

        return collection
          .deleteOne({ _id: ObjectId(message_id) })
          .then((data) => {
            client.close();
            resolve(data);
          })
          .catch(reject);
      });
    });

  MyMongoLib.listenToChanges = (cbk) => {
    client.connect((err, client) => {
      console.log("ListenToChanges - Connected correctly to server");

      const db = client.db(dbName);

      const messagesCollection = db.collection("Messages");
      const csCursorMessages = messagesCollection.watch();

      console.log("Listening to changes on mongo");

      csCursorMessages.on("change", (data) => {
        console.log("Messages changed: ", data);
        MyMongoLib.getMessages().then((docs) => cbk(JSON.stringify(data)));
      });
    });
  };

  return MyMongoLib;
};

module.exports = MyMongoLib;
