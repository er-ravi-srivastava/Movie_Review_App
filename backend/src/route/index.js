import express from "express";
import db from "../db/Schema.js";

const router = express.Router();


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.Users.findOne({username,password});
    if(!user){
      throw new Error("Invalid credentials")
      }
    else{
      res.status(200).json({message:"login successfull"})
    }
  } catch (error) {
    res.status(403).json({ message: error.message });

  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await db.Users.findOne({ username});
    
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    
    const newUser = new db.Users({ username, password });
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

    

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
