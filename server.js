
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Booking from "./models/Booking.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

// Test the API
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "IMovies API is running"
  });
});

// Get movie list
app.get("/api/movies", (req, res) => {
  res.json([
    { id: 1, title: "Dune: Part Two", genre: "Sci-Fi" },
    { id: 2, title: "Interstellar", genre: "Drama" },
    { id: 3, title: "Spider-Man: Across the Spider-Verse", genre: "Animation" },
    { id: 4, title: "The Batman", genre: "Action" },
    { id: 5, title: "Inside Out 2", genre: "Animation" },
    { id: 6, title: "Top Gun: Maverick", genre: "Action" }
  ]);
});

// Save a booking
app.post("/api/bookings", async (req, res) => {
  try {
    const {
      customerName,
      movieTitle,
      showtime,
      seats,
      total
    } = req.body;

    if (
      !customerName?.trim() ||
      !movieTitle ||
      !showtime ||
      !Array.isArray(seats) ||
      seats.length === 0 ||
      !Number.isFinite(total) ||
      total <= 0
    ) {
      return res.status(400).json({
        message: "Please provide valid booking details."
      });
    }

    const booking = await Booking.create({
      customerName: customerName.trim(),
      movieTitle,
      showtime,
      seats,
      total
    });

    res.status(201).json({
      message: "Booking saved successfully",
      booking
    });
  } catch (error) {
    console.error("Booking error:", error.message);

    res.status(500).json({
      message: "Could not save booking."
    });
  }
});

// View saved bookings (useful for project demonstration)
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Could not retrieve bookings."
    });
  }
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`IMovies API running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
