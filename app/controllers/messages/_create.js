const { Connection, Message } = require('../../models');

exports.create = async ({ data, socket, io, onLineUsers }) => {
  console.log(data, socket.id, onLineUsers);
  let message = new Message({ ...data, from: socket._id });
  message = await message.save();
  let connection = await Connection.findOne({ _id: data.to });
  connection.users.map((item) => io.to(onLineUsers[item]).emit('MESSAGE_CREATED', message));

  return;
};
