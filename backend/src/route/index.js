import express from "express";
import db from "../db/Schema.js";

const router = express.Router();

router.get("/movies", async (req, res) => {
    const movies = db.Movie.find({});
    console.log(movies)
    res.json({ data: { movie: [] } });
});

export default router;
