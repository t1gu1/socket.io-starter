var server = require("http").createServer();
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

console.log("Socket-io server running on 3000.");
console.log(
  'Emit to "socketio-client" or "socketio-client-ack" for debugging.'
);

io.on("connection", function (socket) {
  socket.emit("message", { hello: "world" });

  socket.on("socketio-client", function (data) {
    console.log("type: ", typeof data, " \ndata: ", data, "\n");
    socket.emit("socketio-client", data);
  });

  socket.on("socketio-client-ack", (data, fn) => {
    console.log("on socketio-client-ack: ", data);
    fn(data);
  });

  socket.on("moveRight", (data, fn) => {
    console.log("moveRight", data);
    fn(data);
  });

  socket.on("moveLeft", (data, fn) => {
    console.log("moveLeft", data);
    fn(data);
  });
});

server.listen(3000);
