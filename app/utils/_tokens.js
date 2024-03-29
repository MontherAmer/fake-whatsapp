const { sign, verify } = require('jsonwebtoken');

const createJWT = ({ _id, email }) => {
  return sign({ _id, email, app: 'SIMPLE_WHATS_APP' }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '20d',
  });
};

const decodeJWT = async (token) => {
  try {
    const { _id, email } = await verify(token, process.env.ACCESS_TOKEN_SECRET);
    return _id ? { _id, email } : null;
  } catch (err) {
    return null;
  }
};

const getTokenFromHeader = async (req) => {
  const autherization = req.headers.authorization;
  if (!autherization) return { success: false, e: 401, message: 'You are not allowed' };
  let token = autherization.split(' ')[1];
  if (!token) return { success: false, e: 401 };
  let { _id, email } = await decodeJWT(token);
  return { success: true, _id, email };
};

exports.createJWT = createJWT;
exports.decodeJWT = decodeJWT;
exports.getTokenFromHeader = getTokenFromHeader;
