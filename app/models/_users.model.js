const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: { unique: true } },
    name: { type: String, required: true, minlength: 3 },
    password: { type: String },
    image: { type: String },
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Connection' }],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    let salt = bcrypt.genSaltSync(5);
    let hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  let isEqual = await bcrypt.compareSync(password, this.password);
  return isEqual;
};

exports.User = mongoose.model('User', UserSchema);
