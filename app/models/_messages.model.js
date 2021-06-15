const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');
const MessageSchema = new mongoose.Schema(
  {
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
    text: { type: String },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    uuid: { type: String, default: uuid },
  },
  {
    timestamps: true,
  }
);

exports.Message = mongoose.model('Message', MessageSchema);
