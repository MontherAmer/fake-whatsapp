const { User } = require('../models');
const { create, update } = require('./messages');

const onLineUsers = {};

exports.onSocketConnect = async (io, socket) => {
  let user = await User.findById(socket._id);

  if (!user.isOnline) await User.updateOne({ _id: socket._id }, { isOnline: true });

  onLineUsers[socket._id] = socket.id;

  // socket.on('SEND_MESSAGE', (data) => create({ data, socket, io, onLineUsers }));

  socket.on('SOCKET_CREATE_MESSAGE', async (data) => {
    let { message, users } = await create({ data, socket });
    users.map((item) => io.to(onLineUsers[item]).emit('SOCKET_REPLAY_ON_CREATE_MESSAGE', message));
  });

  // connection.users.map((item) => io.to(onLineUsers[item]).emit('MESSAGE_CREATED', message));

  // socket.on('MESSAGE_READ', ({ contact }) => update({ contact, socket, io, onLineUsers }));
  //
  // NOTE handle socket disconnect
  socket.on('disconnect', async () => {
    await User.updateOne({ _id: socket._id }, { isOnline: false });
    delete onLineUsers[socket._id];
  });
};
