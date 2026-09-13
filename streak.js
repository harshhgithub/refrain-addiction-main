require("dotenv").config();
const mongoose = require("mongoose");

// Uses the same connection app.js/mongo.js already opened.
const streakSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  currentStreak: {
    type: Number,
    default: 0,
  },
  longestStreak: {
    type: Number,
    default: 0,
  },
  streakStartDate: {
    type: Date,
    default: Date.now,
  },
  lastCheckIn: {
    type: Date,
    default: null,
  },
  history: [
    {
      date: { type: Date, default: Date.now },
      type: { type: String, enum: ["checkin", "relapse"] },
      note: { type: String, default: "" },
    },
  ],
});

const Streak = mongoose.model("Streak", streakSchema);

module.exports = Streak;