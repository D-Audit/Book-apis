const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27018/bookstore';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✓ Connected to MongoDB');
  } catch (error) {
    console.log('✗ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
