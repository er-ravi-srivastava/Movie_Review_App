import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server connected to robi daa");
  });
}).catch(error => {
  console.error("Error connecting to the database:", error);
});
