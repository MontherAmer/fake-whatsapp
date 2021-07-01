const { User, Connection } = require('../models');
const { create, update } = require('./messages');

const onLineUsers = {};

exports.onSocketConnect = async (io, socket) => {
  let user = await User.findById(socket._id);

  if (!user.isOnline) await User.updateOne({ _id: socket._id }, { isOnline: true });

  onLineUsers[socket._id] = socket.id;

  socket.on('SOCKET_CREATE_MESSAGE', async (data) => {
    let { message, users } = await create({ data, socket });
    users.map((item) => io.to(onLineUsers[item]).emit('SOCKET_REPLAY_ON_CREATE_MESSAGE', message));
  });

  socket.on('SOCKET_MARK_MSG_AS_READ', (data) => update(data));

  socket.on('USER_START_TYPING', async (data) => {
    let connection = await Connection.findById(data.contact);
    usersInConnection = connection.users;
    usersInConnection.map((item) =>
      String(item) !== String(data.user) ? io.to(onLineUsers[item]).emit('RECIVE_USER_START_TYPING', data.contact) : null
    );
  });

  socket.on('USER_STOP_TYPING', async (data) => {
    let connection = await Connection.findById(data.contact);
    usersInConnection = connection.users;
    usersInConnection.map((item) =>
      String(item) !== String(data.user) ? io.to(onLineUsers[item]).emit('RECIVE_USER_STOP_TYPING', data.contact) : null
    );
  });

  // NOTE handle socket disconnect
  socket.on('disconnect', async () => {
    await User.updateOne({ _id: socket._id }, { isOnline: false });
    delete onLineUsers[socket._id];
  });
};
