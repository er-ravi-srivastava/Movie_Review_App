import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raviprakashshrivastav7:Ravi%402000@cluster0.b8god0x.mongodb.net/movie_user_login_data"
    );
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" Unable to connect to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
