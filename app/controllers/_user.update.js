const { User } = require('../models');

exports.update = async (req, res) => {
  try {
    let user = await User.findById(req._id);
    console.log('req.file ', req.file);
    if (req.file) user.image = req.file.location;

    if (req.body.name) user.name = req.body.name;

    user = await user.save();
    console.log('useruser ', user);
    let { _id, email, name, image } = user;

    return res.send({ success: true, status: 200, data: { _id, email, name, image } });
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'some thing went wrong' });
  }
};
