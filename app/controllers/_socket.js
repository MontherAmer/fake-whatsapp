const { User } = require('../models');
const onLineUsers = {};

exports.onSocketConnect = async (io, socket) => {
  console.log('socket connected');
  let user = await User.findById(socket._id);

  if (!user.isOnline) await User.updateOne({ _id: socket._id }, { isOnline: true });

  onLineUsers[socket._id] = socket.id;
  console.log('onLineUsers ', onLineUsers);

  // NOTE handle socket disconnect
  socket.on('disconnect', async () => {
    await User.updateOne({ _id: socket._id }, { isOnline: false });
    delete onLineUsers[socket._id];
  });
};
