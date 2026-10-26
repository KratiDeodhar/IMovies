
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true
    },
    movieTitle: {
      type: String,
      required: true
    },
    showtime: {
      type: String,
      required: true
    },
    seats: {
      type: [String],
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
