const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const h = require('./header.js');

let clnt = 0;

io.on('connection', (socket) => {
  clnt++;
  console.log('New client connected (clients: ' + clnt + ')');

  socket.on('send', (msg) => {
    console.log('msg: ' + msg);
    socket.broadcast.emit('broadcast', msg);
  });

  socket.on('disconnect', () => {
    clnt--;
    console.log('A client disconnected (clients: ' + clnt + ')');
  });
});

server.listen(h.SERVER_PORT, () => {
  console.log('Listening now (port: ' + h.SERVER_PORT + ')');
});
