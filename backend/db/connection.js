const mongoose = require('mongoose');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    console.error('MONGO_URL is not defined');
    return null;
  }

  if (!cached.promise) {
    console.log('Creating new MongoDB connection');
    cached.promise = mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('MongoDB connected successfully');
    return cached.conn;
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    return null;
  }
};

module.exports = connectDb;
