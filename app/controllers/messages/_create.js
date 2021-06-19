const { Connection, Message } = require('../../models');

exports.create = async ({ data, socket }) => {
  let message = new Message({ ...data, from: socket._id, readBy: [socket._id] });
  message = await message.save();
  let connection = await Connection.findOne({ _id: data.to });
  await Connection.updateOne({ _id: data.to }, { $push: { messages: message._id } });
  return { message, users: connection.users };
};
