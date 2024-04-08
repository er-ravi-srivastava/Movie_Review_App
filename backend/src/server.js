import express from "express";
import  connectDB  from "./db/index.js";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());

const MONGODB_URI = "mongodb+srv://raviprakashshrivastav7:Ravi%402000@cluster0.b8god0x.mongodb.net/";

connectDB(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
