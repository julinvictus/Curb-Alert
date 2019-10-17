const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String
    
  },
  email: {
    type: String
    
  },
  password: {
    type: String
    
  }
});

module.exports = User = mongoose.model('User', UserSchema);