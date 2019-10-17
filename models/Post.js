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
    
  }
});

module.exports = Post = mongoose.model('Post', PostSchema);