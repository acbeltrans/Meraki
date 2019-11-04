const WebSocket = require("ws");

const MyWsLib = function() {
  const MyWsLib = this || {};
  const clients = [];

  MyWsLib.setupWS = (server) => {
    const wss = new WebSocket.Server({ server });

    console.log("setting up Web Socket");

    wss.on("connection", (ws) => {
      ws.isAlive = true;

      ws.on("error", (err) => {
        console.warn(`Client disconnected - reason: ${err}`);
      });

      console.log("Accepting new connection");
      clients.push(ws);
    });
  };

  MyWsLib.notifyAll = (data) => {
    for (let ws of clients) {
      ws.send(data);
    }
  };

  return MyWsLib;
};

module.exports = MyWsLib;
