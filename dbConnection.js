// db.js
const mongoose = require("mongoose")
const localDB = `mongodb+srv://fortunegaelle2:hyN81D9OlnfWyna6@project-cluster-01.rrsynck.mongodb.net/Bonvoyage?retryWrites=true&w=majority&appName=Project-Cluster-01`
const connectDB = async () => {
  try {

    await mongoose.connect(localDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 60000, // Set timeout to 30 seconds
    });

    console.log('Connected to MongoDB ');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


module.exports = connectDB
