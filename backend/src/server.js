import express from "express";
import connectDB from "./db/index.js";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());

connectDB()

app.listen(PORT, () => {
  console.log("server connected to Robi daa")
});
