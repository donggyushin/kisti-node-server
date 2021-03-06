import WebSocket from "websocket";

const WebSocketClient = WebSocket.client;

const client = new WebSocketClient();

client.on("connectFailed", function(error) {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", function(connection) {
  console.log("WebSocket Client Connected");
  connection.on("error", function(error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on("close", function() {
    console.log("echo-protocol Connection Closed");
  });
  connection.on("message", function(message) {
    if (message.type === "utf8") {
      console.log("Received: '" + message.utf8Data + "'");
    }
  });

  function sendNumber() {
    if (connection.connected) {
      var number = Math.round(Math.random() * 0xffffff);
      connection.sendUTF("danlab");
      setTimeout(sendNumber, 1000);
    }
  }
  sendNumber();
});

client.connect("ws://172.30.1.40:9766/");
