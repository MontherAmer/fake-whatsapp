const { User, Connection } = require('../../models');
const { getUserConnections } = require('../../utils');

exports.group = async (req, res) => {
  try {
    let users = JSON.parse(req.body.users);

    users.push(req._id);

    let connection = new Connection({ ...req.body, users, type: 'Group', image: req.file ? req.file.location : null });

    connection = await connection.save();

    await User.updateMany({ _id: connection.users }, { $push: { connections: connection._id } });

    let data = await getUserConnections(req._id);

    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'Some thing went wrong' });
  }
};
