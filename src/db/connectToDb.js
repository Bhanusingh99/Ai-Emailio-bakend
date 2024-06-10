import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    // Replace 'your_mongodb_connection_string' with your actual MongoDB connection string
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
