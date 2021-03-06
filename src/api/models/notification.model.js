const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    trim: true,
  },
  isRead: {
    type: Boolean,
    default: false
  },
  path: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const notificationModel = mongoose.model('Notification', notificationSchema);

module.exports = {
  schema: notificationSchema,
  model: notificationModel,
};
