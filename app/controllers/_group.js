const { Connection } = require('../models');
const { getUserConnections } = require('../utils');

exports.group = async (req, res) => {
  try {
    if (req.file) user.image = req.file.location;

    let connection = new Connection({ ...req.body, image: req.file ? req.file.location : null });

    await connection.save();

    let data = await getUserConnections(req._id);

    return res.send({ success: true, status: 200, data });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, status: 500 });
  }
};
