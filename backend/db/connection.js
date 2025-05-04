const mongoose = require('mongoose');

// Remove relative path - not needed in serverless and can cause issues
require('dotenv').config();

// Fix variable name to match case exactly (URL not URl)
const MONGO_URL = process.env.MONGO_URL;

// Add error handling and logging
const connectDb = async () => {
  try {
    // Log for debugging (will appear in Vercel logs)
    console.log('Attempting to connect to MongoDB...');
    console.log('MONGO_URL exists:', !!MONGO_URL);
    
    if (!MONGO_URL) {
      throw new Error('MONGO_URL environment variable is not defined');
    }
    
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('MongoDB connection successful!');
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Return false but don't throw - this prevents app crash
    return false;
  }
};

module.exports = connectDb;