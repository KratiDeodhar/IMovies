
import express from "express";
import Movie from "../models/Movie.js";
import requireAdmin from "../middleware/requireAdmin.js";

const router = express.Router();

router.use(requireAdmin);

// Get all movies
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ title: 1 });
    res.json(movies);
  } catch {
    res.status(500).json({ message: "Failed to load movies." });
  }
});

// Add a movie
router.post("/movies", async (req, res) => {
  try {
    const { title, genre, year, language, rating, duration, poster, description } = req.body;

    if (!title?.trim() || !genre?.trim() || !Number.isFinite(Number(year))) {
      return res.status(400).json({
        message: "Title, genre, and a valid year are required."
      });
    }

    const movie = await Movie.create({
      title: title.trim(),
      genre: genre.trim(),
      year: Number(year),
      language,
      rating,
      duration,
      poster,
      description
    });

    res.status(201).json(movie);
  } catch {
    res.status(400).json({ message: "Failed to add movie." });
  }
});

// Update a movie
router.put("/movies/:id", async (req, res) => {
  try {
    const fields = [
      "title", "genre", "year", "language",
      "rating", "duration", "poster", "description"
    ];

    const updates = {};

    for (const field of fields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!movie) {
      return res.status(404).json({ message: "Movie not found." });
    }

    res.json(movie);
  } catch {
    res.status(400).json({ message: "Failed to update movie." });
  }
});

// Delete a movie
router.delete("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found." });
    }

    res.json({ message: "Movie deleted successfully." });
  } catch {
    res.status(400).json({ message: "Failed to delete movie." });
  }
});

export default router;
