require("dotenv").config();
import http from "http";
import * as socketIO from "socket.io";

const server = http.createServer();
const io = new socketIO.Server(server, {
  cors: {
    origin: "*",
  },
});

console.log(`Socket-io server running on ${process.env.PORT}.`);
console.log(
  'Emit to "socketio-client" or "socketio-client-ack" for debugging.'
);

io.on("connection", (socket: socketIO.Socket) => {
  console.log("Connected");
  socket.emit("message", { hello: "world" });

  // For SocketIO Client Tool
  socket.on("socketio-client", (data: any) => {
    console.log("type: ", typeof data, " \ndata: ", data, "\n");
    socket.emit("socketio-client", data);
  });

  socket.on("socketio-client-ack", (data: any, fn: any) => {
    console.log("on socketio-client-ack: ", data);
    fn(data);
  });

  // Custom test event
  socket.on("moveRight", (data: any) => {
    console.log("moveRight", data);
  });

  socket.on("moveLeft", (data: any) => {
    console.log("moveLeft", data);
  });
});

server.listen(`${process.env.PORT}`);
