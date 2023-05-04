const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

const PORT = 5001;

// クライアントと通信
io.on('connection', (socket) => {
  console.log('a user connected');

  // クライアントからの受信
  socket.on('send_message', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
