import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({path:'./env'})

const app = express();

app.use(express.json());

connectDB()

app.listen(process.env.PORT, () => {
  console.log("Server connected to robi daa");
});
