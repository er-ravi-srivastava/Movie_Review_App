import express from "express";
import db from "../db/Schema.js";
import bcrypt from 'bcrypt';
import { trusted } from "mongoose";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await db.Users.findOne({ username });
    console.log(user);
    const pass = await bcrypt.compare(password, user.password)
    
    if (!user || !pass) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    res.status(200).json({ success: true, message: "Login hogaya",  id: user.id });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await db.Users.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new db.Users({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movie = await db.Movie.find({});
    const movieMap = movie.map(movie => ({
      _id: movie._id.toString(),
      Title: movie.Title,
      Year: movie.Year,
      Rated: movie.Rated,
      Released: movie.Released,
      Runtime: movie.Runtime,
      Genre: movie.Genre,
      Director: movie.Director,
      Writer: movie.Writer,
      Actors: movie.Actors,
      Plot: movie.Plot,
      Language: movie.Language,
      Country: movie.Country,
      Awards: movie.Awards,
      Metascore: movie.Metascore,
      imdbRating: movie.imdbRating,
      imdbVotes: movie.imdbVotes,
      imdbID: movie.imdbID,
      Type: movie.Type,
      Response: movie.Response,
      Images: movie.Images
    }));
    res.json({ success: true, data: { movies: movieMap } });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
