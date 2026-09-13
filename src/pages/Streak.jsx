import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Sidebar } from "../components";
import useSharedStore from "./Store";

const API_BASE = "http://localhost:8000"; // swap for your env var if you centralize it

function formatDay(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { weekday: "short" });
}

function Streak() {
  const email = useSharedStore((state) => state.sharedData);

  const [streak, setStreak] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showRelapseNote, setShowRelapseNote] = useState(false);
  const [relapseNote, setRelapseNote] = useState("");

  const fetchStreak = useCallback(async () => {
    if (!email) return;
    try {
      const res = await axios.get(`${API_BASE}/api/streak/${email}`);
      setStreak(res.data);
    } catch (error) {
      console.error("Error fetching streak:", error);
    } finally {
      setLoading(false);
    }
  }, [email]);

  useEffect(() => {
    fetchStreak();
  }, [fetchStreak]);

  const alreadyCheckedInToday =
    streak?.lastCheckIn &&
    new Date(streak.lastCheckIn).toDateString() === new Date().toDateString();

  const handleCheckIn = async () => {
    setActionLoading(true);
    setMessage("");
    try {
      const res = await axios.post(`${API_BASE}/api/streak/checkin`, { email });
      setStreak(res.data);
      setMessage("Nice work — checked in for today.");
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Something went wrong. Try again."
      );
    } finally {
      setActionLoading(false);
    }
  };

  const handleRelapse = async () => {
    setActionLoading(true);
    setMessage("");
    try {
      const res = await axios.post(`${API_BASE}/api/streak/relapse`, {
        email,
        note: relapseNote,
      });
      setStreak(res.data);
      setMessage("Logged. A setback isn't the end — you can restart today.");
      setShowRelapseNote(false);
      setRelapseNote("");
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    } finally {
      setActionLoading(false);
    }
  };

  // Build a simple last-14-days view from history for the bar chart
  const buildLastDays = () => {
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dayStr = d.toDateString();

      const entriesForDay =
        streak?.history?.filter(
          (h) => new Date(h.date).toDateString() === dayStr
        ) || [];

      const hasRelapse = entriesForDay.some((h) => h.type === "relapse");
      const hasCheckin = entriesForDay.some((h) => h.type === "checkin");

      days.push({
        date: d,
        status: hasRelapse ? "relapse" : hasCheckin ? "checkin" : "none",
      });
    }
    return days;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-black flex">
        <div className="h-screen sticky top-0 shrink-0">
          <Sidebar />
        </div>
        <main className="flex-1 flex items-center justify-center">
          <p className="text-sm text-gray-500">Loading your progress...</p>
        </main>
      </div>
    );
  }

  const lastDays = buildLastDays();

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black flex">
      {/* Sidebar */}
      <div className="h-screen sticky top-0 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-5 sm:px-8 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
              Progress
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Your streak
            </h1>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Small consistent wins add up. Check in daily to keep your
              streak going.
            </p>
          </div>

          {/* Hero streak card */}
          <div className="relative mb-8 overflow-hidden rounded-3xl bg-black p-7 text-white shadow-xl md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 right-24 h-64 w-64 rounded-full border border-white/5" />

            <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">
                  CURRENT STREAK
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-bold leading-none">
                    {streak?.currentStreak ?? 0}
                  </span>
                  <span className="text-lg text-gray-300">
                    {streak?.currentStreak === 1 ? "day" : "days"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-300 max-w-sm">
                  {streak?.currentStreak > 0
                    ? "Keep it up — check in every day to protect your streak."
                    : "Today is a good day to start. Check in below."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  Longest streak
                </p>
                <p className="text-2xl font-bold">
                  {streak?.longestStreak ?? 0} days
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white mb-4">
                <span className="text-lg font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold">Daily check-in</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Confirm you stayed on track today and keep your streak
                alive.
              </p>
              <button
                type="button"
                onClick={handleCheckIn}
                disabled={actionLoading || alreadyCheckedInToday}
                className={`mt-4 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                  alreadyCheckedInToday
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {alreadyCheckedInToday
                  ? "Checked in today ✓"
                  : actionLoading
                  ? "Saving..."
                  : "Check in for today"}
              </button>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 mb-4">
                <span className="text-lg">↺</span>
              </div>
              <h3 className="text-lg font-bold">Had a setback?</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                It happens. Logging it honestly helps you understand your
                patterns — it doesn't erase your progress.
              </p>

              {!showRelapseNote ? (
                <button
                  type="button"
                  onClick={() => setShowRelapseNote(true)}
                  className="mt-4 rounded-lg border border-black px-4 py-2 text-xs font-semibold transition hover:bg-black hover:text-white"
                >
                  Log a relapse
                </button>
              ) : (
                <div className="mt-4">
                  <textarea
                    value={relapseNote}
                    onChange={(e) => setRelapseNote(e.target.value)}
                    placeholder="Optional note — what triggered it?"
                    rows={2}
                    className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:outline-none focus:border-black"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      type="button"
                      onClick={handleRelapse}
                      disabled={actionLoading}
                      className="rounded-lg bg-black text-white px-4 py-2 text-xs font-semibold hover:bg-gray-800"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowRelapseNote(false)}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold hover:border-black"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {message && (
            <div className="mb-8 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
              {message}
            </div>
          )}

          {/* Last 14 days chart */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[2px] text-gray-400">
              Last 14 days
            </p>
            <h2 className="text-xl font-bold mb-6">Your recent history</h2>

            <div className="flex items-end justify-between gap-1 sm:gap-2 h-32">
              {lastDays.map((day, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-full rounded-md transition-all ${
                      day.status === "checkin"
                        ? "bg-black h-24"
                        : day.status === "relapse"
                        ? "bg-red-200 h-8"
                        : "bg-gray-100 h-3"
                    }`}
                    title={day.date.toDateString()}
                  />
                  <span className="text-[10px] text-gray-400">
                    {formatDay(day.date)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-6 pt-5 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-black inline-block" />
                Checked in
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-red-200 inline-block" />
                Relapse
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-gray-100 inline-block" />
                No entry
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Streak;