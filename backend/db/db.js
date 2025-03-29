const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      
    });
    console.log('Connected to DB');
  } catch (error) {
    console.error('DB Connection Error:', error.message);
  }
};

module.exports = connectDB;
