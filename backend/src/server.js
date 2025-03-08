import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";
import router from "./route/index.js";

const app = express();
const PORT = 3008;

connectDB();


// app.use(cors())

app.use(cors({
  origin: "https://movie-review-app-frontend-livid.vercel.app",
  methods: ["POST", "GET", "PUT", "PATCH"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Vercel!" });
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
