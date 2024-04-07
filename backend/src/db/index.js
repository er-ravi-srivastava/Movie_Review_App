import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect();
    console.log("ravi da connected  to the database");
  } catch (error) {
    console.log(error, "ravi da unable to connect to db");
    throw new Error('Could not connect to MongoDB');
  }
};

export default connectDB
