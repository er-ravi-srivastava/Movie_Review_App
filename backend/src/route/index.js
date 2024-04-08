import express from "express";
import db from "../db/Schema.js";

const router = express.Router();

router.get("/movies", async (req, res) => {
  const movies = await db.Movie.find({});
  const movieMapp = movies.map((movie) => {
    return {
      _id: movie._id.toString(),
      title: movie.title,
      poster: movie.poster,
      summary: movie.summary,
    };
  });
  res.json({ data: { movie: movieMapp } });
});

export default router;
