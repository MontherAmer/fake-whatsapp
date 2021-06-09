const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const ConnectionSchema = new mongoose.Schema(
  {
    uuid: { type: String, default: uuid },
    name: { type: String },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    type: { type: String, enum: ['User', 'Group'] },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    timestamps: true,
  }
);

exports.Connection = mongoose.model('Connection', ConnectionSchema);
