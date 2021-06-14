const { Message } = require('../models');

exports.messages = async (req, res) => {
  try {
    let data = await Message.find({ to: req.params.id }).sort({ created_at: -1 });

    return res.send({ success: true, status: 200, data });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, status: 500 });
  }
};
