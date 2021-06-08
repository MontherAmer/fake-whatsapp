const { User, Connection } = require('../models');
const { getTokenFromHeader } = require('./_tokens');

exports.isAuthenticated = async (req, res, next) => {
  try {
    let { success, _id, email, e } = await getTokenFromHeader(req);
    if (!success) return res.send({ success: false, status: 401, message: 'You are not allowed' });
    let user = await User.findById(_id);
    if (!user) return res.send({ success: false, status: 401, message: 'You are not allowed' });
    req._id = _id;
    req.email = email;
    return next();
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'Some thing went wrong' });
  }
};

exports.canSeeMessages = (req, res, next) => {
  try {
    console.log('need to be handled');
  } catch (err) {
    return res.send({ success: false, status: 500, message: 'Some thing went wrong' });
  }
};
