const mongoose = require('mongoose');
const { Schema } = mongoose;
const modelOptions = require('./model.options.js');

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    enum: ['pc', 'playstation', 'xbox'],
    required: true,
  },
  mediaId: {
    type: String,
    required: true,
  },
  mediaTitle: {
    type: String,
    required: true,
  },
  mediaPoster: {
    type: String,
    required: true,
  },
}, modelOptions);

module.exports = mongoose.model('Review', reviewSchema);
