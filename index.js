const webSocket = require("ws");

const port = process.env.PORT || 4000;
const host = "0.0.0.0";

const wss = new webSocket.Server({ host: host, port }, () => {
  console.log("Server Started");
});

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(`Data received ${data}`);
    ws.send(`Data Storied on server: ${data}`);
  });
});

wss.on("listening", () => {
  console.log(`Server is listening on ${host}:${port}`);
});
