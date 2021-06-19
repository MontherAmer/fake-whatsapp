const { getUserConnections } = require('../../utils');

exports.listContacts = async (req, res) => {
  try {
    let data = await getUserConnections(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'something went wrong' });
  }
};
