const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String
  },
  image_url: {
    type: String
  },
  date_posted: {
    type: Date
  },
  location: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  claimed: {
    type: Boolean
  },
});

module.exports = Post = mongoose.model('Post', PostSchema);