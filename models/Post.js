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
  latitude: {
    type: mongoose.Types.Decimal128
  },
  longitude: {
    type: mongoose.Types.Decimal128
  },
  claimed: {
    type: Boolean
  },
});

module.exports = Post = mongoose.model('Post', PostSchema);