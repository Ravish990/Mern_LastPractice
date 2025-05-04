const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const MONGO_URI = process.env.MONGO_URI;

const connectDb = () => mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB is connected!");
});

module.exports = connectDb;
