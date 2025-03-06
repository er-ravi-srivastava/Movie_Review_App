import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";
import router from "./route/index.js";

const app = express();
const PORT =  3008;

connectDB();

app.use(cors(
{
  origin: ["https://movie-review-app-delta-ochre.vercel.app/"]
  method: ["POST","GET","PUT","PATCH"],
  credentials: true
}
));
app.use(express.json());
app.use(router);



app.listen(PORT, () => {
  console.log(PORT);
  console.log("It is been connected now ");
});
