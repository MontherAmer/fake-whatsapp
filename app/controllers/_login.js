const { User } = require('../models');
const { createJWT } = require('../utils');

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) return res.send({ success: false, status: 401, message: 'email or password is wrong' });

    let isMatched = await user.comparePassword(password);

    if (!isMatched) return res.send({ success: false, status: 401, message: 'email or password is wrong' });

    ({ _id, email, name } = user);

    let token = createJWT({ _id, email });

    return res.send({ success: true, status: 200, data: { _id, email, name, token } });
  } catch (err) {
    return res.send({ success: false, status: 500 });
  }
};
