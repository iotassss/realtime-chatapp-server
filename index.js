const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const PORT = 5001;

// クライアントと通信
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
