const { Message } = require('../../models');

exports.list = async (req, res) => {
  try {
    let data = await Message.find({ to: req.params.id }).sort({ created_at: -1 });

    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'Some thing went wrong' });
  }
};
