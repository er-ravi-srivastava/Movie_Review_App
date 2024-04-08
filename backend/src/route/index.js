import express from "express";
import db from "../db/Schema.js";

const router = express.Router();

router.get("/movies", async (req, res) => {
  const movies = await db.Movie.find({});
  console.log(movies)
  const movieMapp = movies.map((movie) => {
    console.log("first");
    return {
      _id: movie._id.toString(),
      title: movie.title,
      poster: movie.poster,
      summary: movie.summary,
    };
  });
  console.log(movieMapp);
  res.json({ data: { movie: [] } });
});

export default router;
