import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://raviprakashshrivastav7:Ravi%402000@cluster0.b8god0x.mongodb.net/');
    console.log("ravi da connected  to the database");
  } catch (error) {
    console.log(error, "ravi da unable to connect to db");
    throw new Error('Could not connect to MongoDB');
  }
};

export default connectDB
