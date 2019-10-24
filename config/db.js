const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');
require('dotenv').config();
const uri = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      //db,
      uri,
      {
        useNewUrlparser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
      
    );

    console.log('✨🌱 MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;