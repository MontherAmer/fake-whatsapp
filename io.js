const { onSocketConnect } = require('./app/controllers');
const { verify } = require('jsonwebtoken');

const server = require('http').createServer();
const options = {
  cors: true,
};
const io = require('socket.io')(server, options);

var socketApi = {};
socketApi.io = io;

io.use(async (socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    try {
      let token = socket.handshake.query.token;
      let { _id } = await verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (!_id) return;
      socket._id = _id;
      next();
    } catch (err) {
      return;
    }
  } else {
    return;
  }
}).on('connection', (socket) => onSocketConnect(io, socket));

module.exports = socketApi;
