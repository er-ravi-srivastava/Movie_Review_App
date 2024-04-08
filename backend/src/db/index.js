import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raviprakashshrivastav7:Ravi%402000@cluster0.b8god0x.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw new Error("Could not connect to MongoDB");
  }
};

export default connectDB;
