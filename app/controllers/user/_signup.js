const { User } = require('../../models');
const { createJWT } = require('../../utils');

exports.signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!email || !name || !password) return res.send({ success: false, status: 400, message: 'missing fields' });

    let user = new User({ name, email, password });

    user = await user.save();
    ({ _id, email } = user);
    let token = createJWT({ _id, email });

    return res.send({ success: true, status: 200, data: { email, name, _id, token } });
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'Some thing went wrong' });
  }
};
