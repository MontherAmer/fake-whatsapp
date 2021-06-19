const { Message } = require('../../models');

exports.update = async ({ to, user }) => {
  await Message.updateMany({ $and: [{ to }, { readBy: { $nin: user } }] }, { $push: { readBy: user } });
  return;
};
