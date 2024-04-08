import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/movies", (req, res) => {
  res.json({
    data: [
      {
        _id: { $oid: "6613b710abc18fdf24348352" },
        title: "Inception",
        poster:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH&psig=AOvVaw1xAibESLQykiaXMJe55NJF&ust=1712516176659000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCqkoWiroUDFQAAAAAdAAAAABAE",
        rating: "8.8",
        summary:
          "A thief who enters the dreams of others to steal their secrets from their subconscious",
      },
      {
        _id: { $oid: "6613b710abc18fdf24348352" },
        title: "Dad child",
        poster:
          "https://plus.unsplash.com/premium_photo-1664279047184-6d9ad12f1100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        rating: "8.8",
        summary:
          "Dad teaching son",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(PORT);
  console.log("server connected to Robi daa");
});
