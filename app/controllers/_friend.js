const { User, Connection } = require('../models');

exports.friend = async (req, res) => {
  try {
    console.log('MMMMM', req.body);
    let friend = await User.findOne({ email: req.body.email });

    if (String(friend._id) === String(req._id)) return res.send({ success: false, status: 400, message: `You can't add yourself` });

    let exist = await Connection.findOne({ type: 'User', users: { $all: [req._id, friend._id] } });

    if (exist) return res.send({ success: false, status: 400, message: 'Already exist' });

    console.log('existexist ', exist);

    let connection = new Connection({ users: [req._id, friend._id], type: 'User' });

    connection = await connection.save();

    await User.updateMany({ _id: [req._id, friend._id] }, { $push: { connections: connection._id } });

    let data = await User.findById(req._id)
      .select({ connections: 1, _id: 0 })
      .populate({ path: 'connections', populate: { path: 'users' } });
    // .then((doc) => {
    //   let data = data.connections.map(item=>({

    //   }))
    //   console.log(data);
    //   return res.send({ success: true, status: 200, data });
    // });
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, status: 500 });
  }
};
