import mongoose from "mongoose";

const connectDB = async (MONGODB_URL) => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw new Error("Could not connect to MongoDB");
  }
};

export default connectDB;
