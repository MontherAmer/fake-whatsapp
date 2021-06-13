const { User, Message } = require('../models');

const getConnectionImage = (id, users) => {
  let image = null;
  users.map((item) => {
    if (String(item._id) !== String(id)) image = item.image;
  });
  return image;
};

const getLastMessageText = async (connectionId) => {
  // messages
  let lastMessage = await Message.findOne({ to: connectionId }).sort({ created_at: 1 });
  return lastMessage?.text;
};

const getLastMessageDate = async (connectionId) => {
  // messages
  let lastMessage = await Message.findOne({ to: connectionId }).sort({ created_at: 1 });
  return lastMessage?.created_at;
};

exports.getUserConnections = async (_id) => {
  try {
    let user = await User.findById(_id)
      .select({ connections: 1, _id: 0 })
      .populate({ path: 'connections', options: { sort: { updatedAt: -1 } }, populate: { path: 'users' } });

    let data = user.connections;
    // NOTE need to update and handle groups
    data = Promise.all(
      data.map(async (contact) => {
        let data = contact.users.filter((user) => String(user._id) !== String(_id))[0];
        return contact.type === 'User'
          ? {
              _id: contact._id,
              name: data.name,
              email: data.email,
              type: 'User',
              image: getConnectionImage(_id, contact.users),
              lastMessage: await getLastMessageText(contact._id),
              lastMessageDate: await getLastMessageDate(contact._id),
              unread: 1,
            }
          : {
              _id: contact._id,
              name: contact.name,
              type: 'Group',
              image: contact.image,
              lastMessage: await getLastMessageText(contact._id),
              lastMessageDate: await getLastMessageDate(contact._id),
              unread: 1,
            };
      })
    );

    return data;
  } catch (err) {
    console.log('ERR', err);
  }
};
