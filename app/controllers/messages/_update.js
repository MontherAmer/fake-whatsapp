const { Message } = require('../../models');

exports.update = async ({ contact, socket, io, onLineUsers }) => {
  console.log('HELLO there ', contact);
  let test = await Message.find({ $and: [{ to: contact }, { readBy: { $nin: [socket._id] } }] });
  console.log('TTTTTTTTTTTTTTT ', test.length);
  await Message.updateOne({ $and: [{ to: contact }, { readBy: { $nin: [socket._id] } }] }, { $push: { readBy: socket._id } });

  console.log('onLineUsers[socket._id]', onLineUsers[socket._id]);
  console.log('[socket._id]', socket._id);
  console.log(contact);
  io.to(onLineUsers[socket._id]).emit('ALL_MESSAGES_READ', contact);
};
