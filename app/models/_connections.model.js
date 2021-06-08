const mongoose = require('mongoose');

const ConnectionSchema = new mongoose.Schema(
  {
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    type: { type: String, enum: ['User', 'Group'] },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    timestamps: true,
  }
);

exports.Connection = mongoose.model('Connection', ConnectionSchema);
