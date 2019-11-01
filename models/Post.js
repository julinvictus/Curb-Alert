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
    type: mongoose.Types.Decimal128
  },
  longitude: {
    type: mongoose.Types.Decimal128
  },
  claimed: {
    type: Boolean
  },

  // title: {
  //   type: String

  // },
  // image_url: {
  //   type: String

  // },
  // date_posted: {
  //   type: Date

  // },
  // location: {
  //   type: String
  // }
});

module.exports = Post = mongoose.model('Post', PostSchema);